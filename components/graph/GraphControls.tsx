'use client';

import clsx from 'clsx';
import { CATEGORY_COLORS, CATEGORY_LABELS, type NodeCategory } from '@/data/nodes';

interface Props {
  mode: '2d' | '3d';
  onModeChange: (m: '2d' | '3d') => void;
  canUse3D: boolean;
}

export function GraphControls({ mode, onModeChange, canUse3D }: Props) {
  return (
    <div className="absolute top-4 left-4 z-20 flex flex-col gap-3">
      <div className="card rounded-lg p-1 inline-flex gap-0.5 border border-white/10">
        <button
          onClick={() => onModeChange('2d')}
          className={clsx(
            'px-3 py-1.5 text-xs rounded transition-colors',
            mode === '2d'
              ? 'bg-bg-elevated text-text-primary'
              : 'text-text-muted hover:text-text-primary'
          )}
        >
          2D
        </button>
        <button
          onClick={() => canUse3D && onModeChange('3d')}
          disabled={!canUse3D}
          className={clsx(
            'px-3 py-1.5 text-xs rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed',
            mode === '3d'
              ? 'bg-bg-elevated text-text-primary'
              : 'text-text-muted hover:text-text-primary'
          )}
        >
          3D
        </button>
      </div>

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
