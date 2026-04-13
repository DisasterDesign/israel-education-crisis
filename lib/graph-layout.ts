import { forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3-force-3d';
import type { ProblemNode } from '@/data/nodes';
import type { Edge } from '@/data/edges';

export interface LaidOutNode {
  id: string;
  x: number;
  y: number;
  z: number;
  node: ProblemNode;
}

// פריסה דטרמיניסטית של צמתים במרחב 3D
export function computeLayout3D(
  nodes: ProblemNode[],
  edges: Edge[]
): LaidOutNode[] {
  const simNodes = nodes.map((n, i) => {
    // seed עמדה התחלתית עם נקודות על גוף כדורי (Fibonacci sphere)
    const phi = Math.acos(1 - (2 * (i + 0.5)) / nodes.length);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const r = 8;
    return {
      id: n.id,
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.sin(phi) * Math.sin(theta),
      z: r * Math.cos(phi),
      node: n
    };
  });

  const simLinks = edges.map(e => ({
    source: e.from,
    target: e.to,
    strength: e.strength
  }));

  const sim = forceSimulation(simNodes, 3)
    .force(
      'link',
      forceLink(simLinks)
        .id((d: any) => d.id)
        .distance((l: any) => 12 - l.strength)
        .strength(0.6)
    )
    .force('charge', forceManyBody().strength(-220))
    .force('center', forceCenter(0, 0, 0))
    .stop();

  for (let i = 0; i < 150; i++) sim.tick();

  return simNodes as LaidOutNode[];
}

export function computeLayout2D(
  nodes: ProblemNode[],
  edges: Edge[],
  width = 800,
  height = 600
): { id: string; x: number; y: number; node: ProblemNode }[] {
  const simNodes = nodes.map((n, i) => {
    const angle = (i / nodes.length) * Math.PI * 2;
    const r = Math.min(width, height) / 3;
    return {
      id: n.id,
      x: width / 2 + r * Math.cos(angle),
      y: height / 2 + r * Math.sin(angle),
      node: n
    };
  });

  const simLinks = edges.map(e => ({
    source: e.from,
    target: e.to,
    strength: e.strength
  }));

  const sim = forceSimulation(simNodes, 2)
    .force(
      'link',
      forceLink(simLinks)
        .id((d: any) => d.id)
        .distance((l: any) => 150 - l.strength * 15)
        .strength(0.6)
    )
    .force('charge', forceManyBody().strength(-700))
    .force('center', forceCenter(width / 2, height / 2))
    .stop();

  for (let i = 0; i < 200; i++) sim.tick();

  return simNodes as any;
}
