'use client';

import { AnimatedNumber } from '@/components/ui/AnimatedNumber';
import { SourceBadge } from './SourceBadge';
import type { KPI } from '@/data/nodes';

interface Props {
  kpi: KPI;
}

export function KPICard({ kpi }: Props) {
  const hasNumeric = typeof kpi.numeric === 'number';

  return (
    <div className="card rounded-lg p-5 flex flex-col gap-3 min-h-[140px]">
      <div className="text-xs text-text-secondary leading-snug">
        {kpi.label}
      </div>

      <div className="text-4xl sm:text-5xl font-black tracking-tight leading-none ltr">
        {hasNumeric ? (
          <AnimatedNumber
            value={kpi.numeric!}
            format={v => {
              const rounded = Math.abs(v) > 100 ? Math.round(v) : Math.round(v * 10) / 10;
              const sign = kpi.numeric! < 0 && rounded !== 0 ? '' : '';
              return `${sign}${rounded.toLocaleString('en-US')}${kpi.unit ?? ''}`;
            }}
          />
        ) : (
          <span data-number>{kpi.value}</span>
        )}
      </div>

      <div className="mt-auto">
        <SourceBadge source={kpi.source} year={kpi.year} />
      </div>
    </div>
  );
}
