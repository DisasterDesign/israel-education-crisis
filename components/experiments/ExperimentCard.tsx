import { TAG_LABELS, type Experiment } from '@/data/experiments';

interface Props {
  experiment: Experiment;
  onClick: () => void;
}

type Outcome = 'success' | 'mixed' | 'failure';

const EXPERIMENT_META: Record<
  string,
  { flag: string; outcome: Outcome; outcomeLabel: string }
> = {
  'new-orleans': { flag: '🇺🇸', outcome: 'mixed', outcomeLabel: 'תוצאות מעורבות' },
  'chicago-tracking': { flag: '🇺🇸', outcome: 'success', outcomeLabel: 'הצליח' },
  'chicago-closures': { flag: '🇺🇸', outcome: 'failure', outcomeLabel: 'נכשל' },
  'lawrence-ma': { flag: '🇺🇸', outcome: 'success', outcomeLabel: 'הצליח' },
  charlotte: { flag: '🇺🇸', outcome: 'success', outcomeLabel: 'הצליח' },
  ontario: { flag: '🇨🇦', outcome: 'success', outcomeLabel: 'הצליח' },
  estonia: { flag: '🇪🇪', outcome: 'success', outcomeLabel: 'הצליח' },
  netherlands: { flag: '🇳🇱', outcome: 'mixed', outcomeLabel: 'תוצאות מעורבות' },
  poland: { flag: '🇵🇱', outcome: 'mixed', outcomeLabel: 'נשחק בחזרה' },
  portugal: { flag: '🇵🇹', outcome: 'success', outcomeLabel: 'הצליח' },
  finland: { flag: '🇫🇮', outcome: 'mixed', outcomeLabel: 'נשחק עם השנים' },
  singapore: { flag: '🇸🇬', outcome: 'success', outcomeLabel: 'הצליח במחיר גבוה' },
  'japan-tokkatsu': {
    flag: '🇯🇵',
    outcome: 'success',
    outcomeLabel: 'הצליח במחיר גבוה'
  },
  'south-korea': { flag: '🇰🇷', outcome: 'failure', outcomeLabel: 'נכשל' }
};

const OUTCOME_STYLES: Record<Outcome, { bg: string; color: string; dot: string }> = {
  success: {
    bg: 'color-mix(in srgb, var(--color-military) 15%, transparent)',
    color: 'var(--color-military)',
    dot: 'var(--color-military)'
  },
  mixed: {
    bg: 'color-mix(in srgb, var(--color-demographics) 15%, transparent)',
    color: 'var(--color-demographics)',
    dot: 'var(--color-demographics)'
  },
  failure: {
    bg: 'color-mix(in srgb, var(--accent) 15%, transparent)',
    color: 'var(--accent)',
    dot: 'var(--accent)'
  }
};

const REGION_LABELS = {
  US: 'ארה״ב',
  Canada: 'קנדה',
  Europe: 'אירופה',
  Asia: 'אסיה'
} as const;

export function ExperimentCard({ experiment, onClick }: Props) {
  const meta = EXPERIMENT_META[experiment.id];
  const outcomeStyle = meta ? OUTCOME_STYLES[meta.outcome] : null;

  return (
    <button
      onClick={onClick}
      className="card rounded-lg p-5 text-right w-full flex flex-col gap-3 transition-all hover:-translate-y-0.5 hover:border-white/20"
    >
      <div className="flex justify-between items-start gap-2">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-text-muted">
          {meta && <span className="text-base leading-none">{meta.flag}</span>}
          {REGION_LABELS[experiment.region]}
        </span>
        <span className="text-[10px] font-mono ltr text-text-muted">
          {experiment.year}
        </span>
      </div>

      <h3 className="text-lg font-bold leading-snug">{experiment.title}</h3>
      <div className="text-xs text-text-secondary">{experiment.location}</div>

      {meta && outcomeStyle && (
        <div
          className="inline-flex items-center gap-1.5 self-start px-2 py-1 rounded text-[11px] font-bold"
          style={{ background: outcomeStyle.bg, color: outcomeStyle.color }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: outcomeStyle.dot }}
          />
          {meta.outcomeLabel}
        </div>
      )}

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
