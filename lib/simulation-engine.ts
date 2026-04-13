import {
  POPULATION_WEIGHTS,
  CURRENT_BAGRUT_RATES,
  IDI_SCENARIOS,
  PARAMETER_RANGES
} from '@/data/simulations';

export interface SimulationParams {
  harediBagrut: number;
  harediMaleEmployment: number;
  arabPISA: number;
  coreCurriculumFunding: number;
}

export interface SimulationOutput {
  nationalBagrut: number;
  gdpImpact: number;
  taxRevenue: number;
  universityEntry: number;
  timeline: number;
  convergenceFactor: number;
}

export const DEFAULT_PARAMS: SimulationParams = {
  harediBagrut: PARAMETER_RANGES.harediBagrut.default,
  harediMaleEmployment: PARAMETER_RANGES.harediMaleEmployment.default,
  arabPISA: PARAMETER_RANGES.arabPISA.default,
  coreCurriculumFunding: PARAMETER_RANGES.coreCurriculumFunding.default
};

// שיעור בגרות ערבי מופק מציון PISA במעבר לינארי פשוט
function arabBagrutFromPISA(pisa: number): number {
  const { min, max } = PARAMETER_RANGES.arabPISA;
  const t = (pisa - min) / (max - min);
  return CURRENT_BAGRUT_RATES.arab + t * 32; // עד 70%
}

// convergenceFactor משתמש ב-3 הפרמטרים הכלכליים המרכזיים
export function computeConvergenceFactor(p: SimulationParams): number {
  const bagrutRange = PARAMETER_RANGES.harediBagrut;
  const empRange = PARAMETER_RANGES.harediMaleEmployment;
  const fundingRange = PARAMETER_RANGES.coreCurriculumFunding;

  const b = (p.harediBagrut - bagrutRange.min) / (bagrutRange.max - bagrutRange.min);
  const e = (p.harediMaleEmployment - empRange.min) / (empRange.max - empRange.min);
  const f =
    (p.coreCurriculumFunding - fundingRange.min) /
    (fundingRange.max - fundingRange.min);

  return b * 0.4 + e * 0.4 + f * 0.2;
}

export function simulate(p: SimulationParams): SimulationOutput {
  const arabRate = arabBagrutFromPISA(p.arabPISA);

  const nationalBagrut =
    POPULATION_WEIGHTS.secular * CURRENT_BAGRUT_RATES.secular +
    POPULATION_WEIGHTS.religious * CURRENT_BAGRUT_RATES.religious +
    POPULATION_WEIGHTS.haredi * p.harediBagrut +
    POPULATION_WEIGHTS.arab * arabRate;

  const convergenceFactor = computeConvergenceFactor(p);

  const gdpImpact =
    IDI_SCENARIOS.stagnation.gdpDelta +
    (IDI_SCENARIOS.convergence.gdpDelta - IDI_SCENARIOS.stagnation.gdpDelta) *
      convergenceFactor;

  const taxRevenue =
    IDI_SCENARIOS.stagnation.taxRevenue +
    (IDI_SCENARIOS.convergence.taxRevenue - IDI_SCENARIOS.stagnation.taxRevenue) *
      convergenceFactor;

  const universityEntry =
    IDI_SCENARIOS.stagnation.universityEntry +
    (IDI_SCENARIOS.convergence.universityEntry -
      IDI_SCENARIOS.stagnation.universityEntry) *
      convergenceFactor;

  // ציר זמן: 25 שנים לתוצאה מלאה
  const timeline = Math.round(25 - convergenceFactor * 10);

  return {
    nationalBagrut: Math.round(nationalBagrut * 10) / 10,
    gdpImpact: Math.round(gdpImpact * 10) / 10,
    taxRevenue: Math.round(taxRevenue * 10) / 10,
    universityEntry: Math.round(universityEntry * 10) / 10,
    timeline,
    convergenceFactor: Math.round(convergenceFactor * 100) / 100
  };
}
