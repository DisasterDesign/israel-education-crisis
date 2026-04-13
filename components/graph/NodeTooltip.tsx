'use client';

import type { ProblemNode } from '@/data/nodes';

interface Props {
  node: ProblemNode;
  x: number;
  y: number;
}

export function NodeTooltip({ node, x, y }: Props) {
  return (
    <div
      className="pointer-events-none absolute z-30 card rounded-lg px-3 py-2 border border-white/10 shadow-xl max-w-xs"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -110%)'
      }}
    >
      <div className="text-sm font-bold leading-tight">{node.title}</div>
      <div className="text-xs text-text-muted mt-1 leading-snug">
        {node.subtitle}
      </div>
      <div className="text-[10px] text-accent mt-2">לחץ לפרטים →</div>
    </div>
  );
}
