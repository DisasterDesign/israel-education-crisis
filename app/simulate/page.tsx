'use client';

import { useState, useMemo } from 'react';
import { ParameterSlider } from '@/components/simulate/ParameterSlider';
import { ImpactChart } from '@/components/simulate/ImpactChart';
import { AssumptionPanel } from '@/components/simulate/AssumptionPanel';
import { simulate, DEFAULT_PARAMS, type SimulationParams } from '@/lib/simulation-engine';
import { PARAMETER_RANGES, PARAMETER_LABELS } from '@/data/simulations';

export default function SimulatePage() {
  const [params, setParams] = useState<SimulationParams>(DEFAULT_PARAMS);

  const output = useMemo(() => simulate(params), [params]);

  const update = <K extends keyof SimulationParams>(key: K, value: number) => {
    setParams(p => ({ ...p, [key]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs font-mono text-accent tracking-widest mb-4">
          SIMULATE
        </div>
        <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
          משוך חוט
        </h1>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          שנה משתנה אחד — ראה מה קורה לכל המערכת. המודל מבוסס על נתוני IDI ושורש,
          ואינו מציע פתרונות. כל הנחה חשופה.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted">
            משתנים
          </h2>
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
          <button
            onClick={() => setParams(DEFAULT_PARAMS)}
            className="text-xs text-text-muted hover:text-accent"
          >
            ← אפס ערכים
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted">
            השפעה על המערכת (עד 2050)
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

          <div className="pt-3 border-t border-white/5 flex justify-between items-center text-xs">
            <span className="text-text-muted">מקדם התכנסות</span>
            <span className="font-mono ltr" data-number>
              {output.convergenceFactor}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-text-muted">זמן לתוצאה מלאה</span>
            <span className="font-mono ltr" data-number>
              {output.timeline} שנים
            </span>
          </div>
        </div>
      </div>

      <AssumptionPanel />
    </div>
  );
}
