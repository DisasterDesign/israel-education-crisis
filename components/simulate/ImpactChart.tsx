'use client';

import { AnimatedNumber } from '@/components/ui/AnimatedNumber';

interface Props {
  label: string;
  value: number;
  unit?: string;
  referenceMin: number;
  referenceMax: number;
  valence?: 'positive' | 'negative';
}

export function ImpactChart({
  label,
  value,
  unit = '',
  referenceMin,
  referenceMax,
  valence = 'positive'
}: Props) {
  const range = referenceMax - referenceMin;
  const pct = range === 0 ? 50 : ((value - referenceMin) / range) * 100;
  const clamped = Math.max(0, Math.min(100, pct));

  const isGood =
    valence === 'positive' ? value > (referenceMin + referenceMax) / 2 : value < (referenceMin + referenceMax) / 2;

  return (
    <div className="card rounded-lg p-5">
      <div className="text-xs text-text-secondary mb-3">{label}</div>

      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-3xl sm:text-4xl font-black ltr">
          <AnimatedNumber
            value={value}
            duration={400}
            format={v => {
              const n = Math.round(v * 10) / 10;
              return `${n > 0 && valence === 'positive' ? '+' : ''}${n}${unit}`;
            }}
          />
        </span>
      </div>

      <div className="relative h-2 bg-bg-primary rounded-full overflow-hidden">
        <div
          className="absolute top-0 bottom-0 left-0 rounded-full transition-all duration-300"
          style={{
            width: `${clamped}%`,
            background: isGood ? 'var(--color-military)' : 'var(--accent)'
          }}
        />
      </div>

      <div className="flex justify-between text-[10px] text-text-muted font-mono mt-1">
        <span>
          {referenceMin > 0 ? '+' : ''}
          {referenceMin}
          {unit}
        </span>
        <span>
          {referenceMax > 0 ? '+' : ''}
          {referenceMax}
          {unit}
        </span>
      </div>
    </div>
  );
}
