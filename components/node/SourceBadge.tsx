import { SOURCES, type SourceId } from '@/data/sources';

interface Props {
  source: SourceId;
  year?: number;
}

export function SourceBadge({ source, year }: Props) {
  const s = SOURCES[source];
  if (!s) return null;

  const content = (
    <span className="inline-flex items-center gap-1 text-[10px] text-text-muted font-mono hover:text-accent transition-colors">
      <span className="w-1 h-1 rounded-full bg-current" />
      <span>{s.label}</span>
      <span data-number>{year ?? s.year}</span>
    </span>
  );

  if (s.url) {
    return (
      <a href={s.url} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  if (s.file) {
    return (
      <a href={s.file} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
