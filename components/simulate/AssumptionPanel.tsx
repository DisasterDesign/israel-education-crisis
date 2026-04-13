'use client';

import { useState } from 'react';
import {
  POPULATION_WEIGHTS,
  CURRENT_BAGRUT_RATES,
  IDI_SCENARIOS
} from '@/data/simulations';

export function AssumptionPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 border-t border-white/5 pt-8">
      <button
        onClick={() => setOpen(!open)}
        className="text-xs font-mono uppercase tracking-widest text-text-muted hover:text-accent transition-colors"
      >
        {open ? '− הסתר' : '+ הצג'} הנחות המודל
      </button>

      {open && (
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-xs">
          <div className="card rounded-lg p-4">
            <div className="font-bold mb-3">משקלי אוכלוסייה</div>
            <ul className="space-y-1 font-mono ltr">
              {Object.entries(POPULATION_WEIGHTS).map(([k, v]) => (
                <li key={k} className="flex justify-between">
                  <span>{k}</span>
                  <span>{(v * 100).toFixed(0)}%</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card rounded-lg p-4">
            <div className="font-bold mb-3">שיעורי בגרות בסיס</div>
            <ul className="space-y-1 font-mono ltr">
              {Object.entries(CURRENT_BAGRUT_RATES).map(([k, v]) => (
                <li key={k} className="flex justify-between">
                  <span>{k}</span>
                  <span>{v}%</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card rounded-lg p-4">
            <div className="font-bold mb-3">תרחישי IDI</div>
            <div className="space-y-3 font-mono ltr text-[11px]">
              <div>
                <div className="text-text-muted mb-1">קיפאון</div>
                <div>GDP: {IDI_SCENARIOS.stagnation.gdpDelta}%</div>
                <div>מס: {IDI_SCENARIOS.stagnation.taxRevenue}%</div>
              </div>
              <div>
                <div className="text-text-muted mb-1">התכנסות</div>
                <div>GDP: +{IDI_SCENARIOS.convergence.gdpDelta}%</div>
                <div>מס: +{IDI_SCENARIOS.convergence.taxRevenue}%</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 card rounded-lg p-4">
            <div className="font-bold mb-2">הנוסחה</div>
            <pre className="text-[11px] font-mono ltr text-text-secondary overflow-x-auto whitespace-pre-wrap">
{`nationalBagrut =
  0.42 * 62 (חילוני) +
  0.15 * 54 (דתי) +
  0.21 * harediBagrut +
  0.23 * arabRate(arabPISA)

convergenceFactor =
  0.4 * normalize(harediBagrut) +
  0.4 * normalize(harediEmployment) +
  0.2 * normalize(coreCurriculumFunding)

gdpImpact = stagnation + (convergence - stagnation) * convergenceFactor`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
