'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { NODES, CATEGORY_COLORS, type ProblemNode } from '@/data/nodes';
import { EDGES } from '@/data/edges';
import { computeLayout2D } from '@/lib/graph-layout';
import { NodeTooltip } from './NodeTooltip';

interface Props {
  onHover?: (node: ProblemNode | null) => void;
}

export function NetworkGraph2D({ onHover }: Props) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 800, h: 600 });
  const [hovered, setHovered] = useState<{ node: ProblemNode; x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new ResizeObserver(entries => {
      const e = entries[0];
      setDims({ w: e.contentRect.width, h: e.contentRect.height });
    });
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  const layout = useMemo(
    () => computeLayout2D(NODES, EDGES, dims.w, dims.h),
    [dims.w, dims.h]
  );

  const positionMap = useMemo(() => {
    const m = new Map<string, { x: number; y: number }>();
    layout.forEach(l => m.set(l.id, { x: l.x, y: l.y }));
    return m;
  }, [layout]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      style={{ minHeight: '500px' }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${dims.w} ${dims.h}`}
        style={{ direction: 'ltr' }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {EDGES.map((e, i) => {
          const a = positionMap.get(e.from);
          const b = positionMap.get(e.to);
          if (!a || !b) return null;
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(255,107,74,0.35)"
              strokeWidth={e.strength * 0.8}
              strokeOpacity={0.25 + e.strength * 0.12}
            />
          );
        })}

        {layout.map(l => {
          const r = 8 + l.node.severity * 1.8;
          return (
            <g
              key={l.id}
              transform={`translate(${l.x},${l.y})`}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => {
                setHovered({ node: l.node, x: l.x, y: l.y });
                onHover?.(l.node);
              }}
              onMouseLeave={() => {
                setHovered(null);
                onHover?.(null);
              }}
              onClick={() => router.push(`/node/${l.node.slug}/`)}
            >
              <circle
                r={r}
                fill={CATEGORY_COLORS[l.node.category]}
                fillOpacity={0.85}
                stroke="rgba(255,255,255,0.8)"
                strokeWidth={1.5}
                filter="url(#glow)"
              />
              <text
                textAnchor="middle"
                y={r + 14}
                fontSize="10"
                fill="var(--text-primary)"
                direction="rtl"
                style={{ pointerEvents: 'none', fontFamily: 'Heebo, sans-serif' }}
              >
                {l.node.titleEn.length > 22
                  ? l.node.titleEn.slice(0, 20) + '…'
                  : l.node.titleEn}
              </text>
            </g>
          );
        })}
      </svg>

      {hovered && (
        <NodeTooltip node={hovered.node} x={hovered.x} y={hovered.y} />
      )}
    </div>
  );
}
