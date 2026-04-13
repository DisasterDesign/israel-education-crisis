import { TAG_LABELS, type Experiment } from '@/data/experiments';

interface Props {
  experiment: Experiment;
  onClick: () => void;
}

const REGION_LABELS = {
  US: 'ארה״ב',
  Canada: 'קנדה',
  Europe: 'אירופה',
  Asia: 'אסיה'
} as const;

export function ExperimentCard({ experiment, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="card rounded-lg p-5 text-right w-full flex flex-col gap-3 transition-transform hover:-translate-y-0.5"
    >
      <div className="flex justify-between items-start gap-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
          {REGION_LABELS[experiment.region]}
        </span>
        <span className="text-[10px] font-mono ltr text-text-muted">
          {experiment.year}
        </span>
      </div>

      <h3 className="text-lg font-bold leading-snug">{experiment.title}</h3>
      <div className="text-xs text-text-secondary">{experiment.location}</div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {experiment.tags.slice(0, 3).map(t => (
          <span
            key={t}
            className="text-[10px] px-2 py-0.5 rounded-full bg-bg-elevated text-text-muted"
          >
            {TAG_LABELS[t]}
          </span>
        ))}
      </div>
    </button>
  );
}
