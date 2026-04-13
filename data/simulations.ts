// קבועי בסיס לסימולציה — כל מספר חשוף ומתועד

export const POPULATION_WEIGHTS = {
  secular: 0.42,
  religious: 0.15,
  haredi: 0.21,
  arab: 0.23
};

export const CURRENT_BAGRUT_RATES = {
  secular: 62,
  religious: 54,
  haredi: 11,
  arab: 38
};

// תרחישי IDI — קבועים כלכליים ברמה של שינוי GDP באחוזים עד 2050
export const IDI_SCENARIOS = {
  stagnation: {
    gdpDelta: -11,
    taxRevenue: -14,
    universityEntry: -8
  },
  convergence: {
    gdpDelta: +15,
    taxRevenue: +22,
    universityEntry: +18
  }
};

export const PARAMETER_RANGES = {
  harediBagrut: { min: 16, max: 85, default: 16, step: 1 },
  harediMaleEmployment: { min: 54, max: 87, default: 54, step: 1 },
  arabPISA: { min: 379, max: 490, default: 400, step: 1 },
  coreCurriculumFunding: { min: 0, max: 100, default: 17, step: 1 }
};

export const PARAMETER_LABELS: Record<string, string> = {
  harediBagrut: 'אחוז חרדים עם בגרות',
  harediMaleEmployment: 'שיעור תעסוקת גברים חרדים',
  arabPISA: 'ציון PISA ערבי',
  coreCurriculumFunding: 'אחוז תקציב ליבה חרדי'
};
