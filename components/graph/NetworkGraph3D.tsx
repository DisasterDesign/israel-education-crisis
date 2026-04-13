'use client';

import { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Line } from '@react-three/drei';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';
import { NODES, CATEGORY_COLORS, type ProblemNode } from '@/data/nodes';
import { EDGES } from '@/data/edges';
import { computeLayout3D, type LaidOutNode } from '@/lib/graph-layout';

function NodeMesh({
  layoutNode,
  onHover,
  onClick,
  isHighlighted
}: {
  layoutNode: LaidOutNode;
  onHover: (n: ProblemNode | null) => void;
  onClick: (n: ProblemNode) => void;
  isHighlighted: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const base = 0.4 + layoutNode.node.severity * 0.08;
    const pulse = hovered ? 1.25 : 1;
    ref.current.scale.setScalar(base * pulse);
  });

  const color = CATEGORY_COLORS[layoutNode.node.category];

  return (
    <group position={[layoutNode.x, layoutNode.y, layoutNode.z]}>
      <mesh
        ref={ref}
        onPointerOver={e => {
          e.stopPropagation();
          setHovered(true);
          onHover(layoutNode.node);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
          document.body.style.cursor = '';
        }}
        onClick={e => {
          e.stopPropagation();
          onClick(layoutNode.node);
        }}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isHighlighted || hovered ? 0.8 : 0.35}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
      {hovered && (
        <Html
          center
          distanceFactor={10}
          style={{
            pointerEvents: 'none',
            transform: 'translate(-50%, -130%)'
          }}
        >
          <div className="card rounded-lg px-3 py-2 border border-white/10 shadow-xl whitespace-nowrap">
            <div className="text-sm font-bold leading-tight" dir="rtl">
              {layoutNode.node.title}
            </div>
            <div
              className="text-[10px] text-text-muted mt-1 max-w-[220px] whitespace-normal"
              dir="rtl"
            >
              {layoutNode.node.subtitle}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

function Scene({
  layout,
  onSelect
}: {
  layout: LaidOutNode[];
  onSelect: (slug: string) => void;
}) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const positionMap = useMemo(() => {
    const m = new Map<string, [number, number, number]>();
    layout.forEach(l => m.set(l.id, [l.x, l.y, l.z]));
    return m;
  }, [layout]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#FF6B4A" />

      {EDGES.map((e, i) => {
        const a = positionMap.get(e.from);
        const b = positionMap.get(e.to);
        if (!a || !b) return null;
        const highlight =
          hoveredId === e.from || hoveredId === e.to;
        return (
          <Line
            key={i}
            points={[a, b]}
            color={highlight ? '#FF8A6A' : '#FF6B4A'}
            lineWidth={e.strength * 0.6}
            transparent
            opacity={highlight ? 0.9 : 0.15 + e.strength * 0.08}
          />
        );
      })}

      {layout.map(l => (
        <NodeMesh
          key={l.id}
          layoutNode={l}
          onHover={n => setHoveredId(n?.id ?? null)}
          onClick={n => onSelect(n.slug)}
          isHighlighted={
            hoveredId !== null &&
            (hoveredId === l.id ||
              EDGES.some(
                e =>
                  (e.from === hoveredId && e.to === l.id) ||
                  (e.to === hoveredId && e.from === l.id)
              ))
          }
        />
      ))}

      <OrbitControls
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        minDistance={8}
        maxDistance={40}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </>
  );
}

export default function NetworkGraph3D() {
  const router = useRouter();
  const layout = useMemo(() => computeLayout3D(NODES, EDGES), []);

  return (
    <div className="w-full h-full" style={{ minHeight: '500px' }}>
      <Canvas
        camera={{ position: [0, 0, 22], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene layout={layout} onSelect={slug => router.push(`/node/${slug}/`)} />
      </Canvas>
    </div>
  );
}
