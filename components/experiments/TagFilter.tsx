'use client';

import clsx from 'clsx';
import { TAG_LABELS, type ExperimentTag } from '@/data/experiments';

interface Props {
  active: ExperimentTag | null;
  onChange: (tag: ExperimentTag | null) => void;
}

export function TagFilter({ active, onChange }: Props) {
  const tags = Object.keys(TAG_LABELS) as ExperimentTag[];

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <button
        onClick={() => onChange(null)}
        className={clsx(
          'px-3 py-1.5 text-xs rounded-full border transition-colors',
          active === null
            ? 'bg-accent text-bg-primary border-accent'
            : 'border-white/10 text-text-muted hover:border-white/30 hover:text-text-primary'
        )}
      >
        הכל
      </button>
      {tags.map(t => (
        <button
          key={t}
          onClick={() => onChange(active === t ? null : t)}
          className={clsx(
            'px-3 py-1.5 text-xs rounded-full border transition-colors',
            active === t
              ? 'bg-accent text-bg-primary border-accent'
              : 'border-white/10 text-text-muted hover:border-white/30 hover:text-text-primary'
          )}
        >
          {TAG_LABELS[t]}
        </button>
      ))}
    </div>
  );
}
