'use client';

import { CATEGORY_COLORS, CATEGORY_LABELS, type NodeCategory } from '@/data/nodes';

export function GraphControls() {
  return (
    <div className="absolute top-4 left-4 z-20">
      <div className="card rounded-lg p-3 min-w-[140px] border border-white/10">
        <div className="text-[10px] text-text-muted mb-2">קטגוריות</div>
        <div className="space-y-1.5">
          {(Object.keys(CATEGORY_LABELS) as NodeCategory[]).map(cat => (
            <div key={cat} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: CATEGORY_COLORS[cat] }}
              />
              <span className="text-xs text-text-secondary">
                {CATEGORY_LABELS[cat]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
