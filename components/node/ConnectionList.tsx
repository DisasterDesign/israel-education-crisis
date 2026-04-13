import Link from 'next/link';
import { getConnectedEdges } from '@/data/edges';
import { NODES } from '@/data/nodes';

interface Props {
  nodeId: string;
}

export function ConnectionList({ nodeId }: Props) {
  const edges = getConnectedEdges(nodeId);
  const nodeMap = new Map(NODES.map(n => [n.id, n]));

  if (edges.length === 0) return null;

  return (
    <div className="space-y-3">
      {edges.map((e, i) => {
        const isOutgoing = e.from === nodeId;
        const otherId = isOutgoing ? e.to : e.from;
        const other = nodeMap.get(otherId);
        if (!other) return null;

        return (
          <Link
            key={`${e.from}-${e.to}-${i}`}
            href={`/node/${other.slug}/`}
            className="card rounded-lg p-4 flex items-start gap-4 group"
          >
            <div
              className="mt-1 w-2 h-2 rounded-full shrink-0"
              style={{ background: `var(--color-${other.category})` }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-text-muted">
                  {isOutgoing ? 'משפיע על' : 'מושפע מ'}
                </span>
                <span className="font-medium group-hover:text-accent transition-colors">
                  {other.title}
                </span>
              </div>
              <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                {e.description}
              </p>
            </div>
            <div className="flex items-center gap-0.5 mt-1 shrink-0">
              {Array.from({ length: 5 }).map((_, j) => (
                <div
                  key={j}
                  className="w-1 h-3 rounded-sm"
                  style={{
                    background:
                      j < e.strength
                        ? 'var(--accent)'
                        : 'rgba(255,255,255,0.08)'
                  }}
                />
              ))}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
