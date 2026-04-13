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

export interface ScenarioPreset {
  id: 'status_quo' | 'optimistic' | 'extreme';
  label: string;
  description: string;
  params: {
    harediBagrut: number;
    harediMaleEmployment: number;
    arabPISA: number;
    coreCurriculumFunding: number;
  };
}

export const SCENARIO_PRESETS: ScenarioPreset[] = [
  {
    id: 'status_quo',
    label: 'המשך מגמה',
    description: 'הערכים הנוכחיים (2024-2025) ממשיכים ללא שינוי מדיניות',
    params: {
      harediBagrut: 16,
      harediMaleEmployment: 54,
      arabPISA: 400,
      coreCurriculumFunding: 17
    }
  },
  {
    id: 'optimistic',
    label: 'תרחיש מתון',
    description: 'שיפור הדרגתי — ליבה חלקית, בגרות עולה, תעסוקה מתקרבת לממוצע',
    params: {
      harediBagrut: 45,
      harediMaleEmployment: 70,
      arabPISA: 440,
      coreCurriculumFunding: 55
    }
  },
  {
    id: 'extreme',
    label: 'תרחיש קיצוני',
    description: 'שינוי מבני מלא — ליבה חובה, תעסוקה לפי היעד, פער PISA נסגר כמעט לחלוטין',
    params: {
      harediBagrut: 80,
      harediMaleEmployment: 85,
      arabPISA: 480,
      coreCurriculumFunding: 95
    }
  }
];
