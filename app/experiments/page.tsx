'use client';

import { useMemo, useState } from 'react';
import {
  EXPERIMENTS,
  getExperimentsByTag,
  type Experiment,
  type ExperimentTag
} from '@/data/experiments';
import { TagFilter } from '@/components/experiments/TagFilter';
import { ExperimentCard } from '@/components/experiments/ExperimentCard';
import { ExperimentDetail } from '@/components/experiments/ExperimentDetail';

export default function ExperimentsPage() {
  const [tag, setTag] = useState<ExperimentTag | null>(null);
  const [selected, setSelected] = useState<Experiment | null>(null);

  const filtered = useMemo(() => getExperimentsByTag(tag), [tag]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs font-mono text-accent tracking-widest mb-4">
          EXPERIMENTS
        </div>
        <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
          ניסויים בעולם
        </h1>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          לא "מה ישראל צריכה לעשות" אלא "מה אחרים ניסו, ומה קרה".
        </p>
        <p className="mt-2 text-sm text-text-muted leading-relaxed">
          14 ניסויים. כל כרטיס מציג: בעיה, פעולה, תוצאה, מחיר, והקשר. אין דירוג, אין "מומלץ".
          עובדות בלבד.
        </p>
      </div>

      <div className="mb-10">
        <TagFilter active={tag} onChange={setTag} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(e => (
          <ExperimentCard
            key={e.id}
            experiment={e}
            onClick={() => setSelected(e)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-text-muted py-20">
          אין ניסויים עם התגית הזו
        </div>
      )}

      <div className="mt-12 text-xs text-text-muted text-center">
        {filtered.length} מתוך {EXPERIMENTS.length} ניסויים
      </div>

      <ExperimentDetail
        experiment={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
