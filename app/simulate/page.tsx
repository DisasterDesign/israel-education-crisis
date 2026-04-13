'use client';

import { useState, useMemo } from 'react';
import clsx from 'clsx';
import { ParameterSlider } from '@/components/simulate/ParameterSlider';
import { ImpactChart } from '@/components/simulate/ImpactChart';
import { AssumptionPanel } from '@/components/simulate/AssumptionPanel';
import { simulate, DEFAULT_PARAMS, type SimulationParams } from '@/lib/simulation-engine';
import {
  PARAMETER_RANGES,
  PARAMETER_LABELS,
  SCENARIO_PRESETS
} from '@/data/simulations';

export default function SimulatePage() {
  const [params, setParams] = useState<SimulationParams>(DEFAULT_PARAMS);
  const [activePreset, setActivePreset] = useState<string | null>('status_quo');

  const output = useMemo(() => simulate(params), [params]);

  const update = <K extends keyof SimulationParams>(key: K, value: number) => {
    setParams(p => ({ ...p, [key]: value }));
    setActivePreset(null);
  };

  const applyPreset = (preset: (typeof SCENARIO_PRESETS)[number]) => {
    setParams(preset.params);
    setActivePreset(preset.id);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs font-mono text-accent tracking-widest mb-4">
          סימולציה
        </div>
        <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
          משוך חוט
        </h1>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          שנה משתנה אחד — ראה מה קורה לכל המערכת. המודל מבוסס על נתוני IDI ושורש,
          ואינו מציע פתרונות. כל הנחה חשופה.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">
          תרחישים מוכנים
        </h2>
        <div className="grid sm:grid-cols-3 gap-3">
          {SCENARIO_PRESETS.map(preset => {
            const active = activePreset === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => applyPreset(preset)}
                className={clsx(
                  'card rounded-lg p-4 text-right transition-all',
                  active
                    ? 'border-accent/60 bg-bg-elevated'
                    : 'hover:border-white/20'
                )}
              >
                <div
                  className={clsx(
                    'text-sm font-bold mb-1',
                    active ? 'text-accent' : 'text-text-primary'
                  )}
                >
                  {preset.label}
                </div>
                <div className="text-[11px] text-text-muted leading-snug">
                  {preset.description}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card rounded-lg p-6 space-y-8">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted">
              קלט · משתנים
            </h2>
            <button
              onClick={() => applyPreset(SCENARIO_PRESETS[0])}
              className="text-[11px] text-text-muted hover:text-accent transition-colors"
            >
              אפס למצב נוכחי
            </button>
          </div>

          <ParameterSlider
            label={PARAMETER_LABELS.harediBagrut}
            value={params.harediBagrut}
            min={PARAMETER_RANGES.harediBagrut.min}
            max={PARAMETER_RANGES.harediBagrut.max}
            step={PARAMETER_RANGES.harediBagrut.step}
            unit="%"
            onChange={v => update('harediBagrut', v)}
          />
          <ParameterSlider
            label={PARAMETER_LABELS.harediMaleEmployment}
            value={params.harediMaleEmployment}
            min={PARAMETER_RANGES.harediMaleEmployment.min}
            max={PARAMETER_RANGES.harediMaleEmployment.max}
            step={PARAMETER_RANGES.harediMaleEmployment.step}
            unit="%"
            onChange={v => update('harediMaleEmployment', v)}
          />
          <ParameterSlider
            label={PARAMETER_LABELS.arabPISA}
            value={params.arabPISA}
            min={PARAMETER_RANGES.arabPISA.min}
            max={PARAMETER_RANGES.arabPISA.max}
            step={PARAMETER_RANGES.arabPISA.step}
            onChange={v => update('arabPISA', v)}
          />
          <ParameterSlider
            label={PARAMETER_LABELS.coreCurriculumFunding}
            value={params.coreCurriculumFunding}
            min={PARAMETER_RANGES.coreCurriculumFunding.min}
            max={PARAMETER_RANGES.coreCurriculumFunding.max}
            step={PARAMETER_RANGES.coreCurriculumFunding.step}
            unit="%"
            onChange={v => update('coreCurriculumFunding', v)}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted">
            פלט · השפעה על המערכת עד 2050
          </h2>
          <ImpactChart
            label="שיעור בגרות ארצי"
            value={output.nationalBagrut}
            unit="%"
            referenceMin={20}
            referenceMax={70}
            valence="positive"
          />
          <ImpactChart
            label="השפעה על תוצר (GDP)"
            value={output.gdpImpact}
            unit="%"
            referenceMin={-11}
            referenceMax={15}
            valence="positive"
          />
          <ImpactChart
            label="השפעה על הכנסות מס"
            value={output.taxRevenue}
            unit="%"
            referenceMin={-14}
            referenceMax={22}
            valence="positive"
          />
          <ImpactChart
            label="שיעור כניסה לאקדמיה"
            value={output.universityEntry}
            unit="%"
            referenceMin={-8}
            referenceMax={18}
            valence="positive"
          />

          <div className="card rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-text-muted">מקדם התכנסות</span>
              <span className="font-mono ltr text-sm text-text-primary" data-number>
                {output.convergenceFactor}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-text-muted">זמן לתוצאה מלאה</span>
              <span className="font-mono ltr text-sm text-text-primary" data-number>
                {output.timeline} שנים
              </span>
            </div>
          </div>
        </div>
      </div>

      <AssumptionPanel />
    </div>
  );
}
