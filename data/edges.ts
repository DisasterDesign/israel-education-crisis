export interface Edge {
  from: string;
  to: string;
  strength: number; // 1-5
  description: string;
}

export const EDGES: Edge[] = [
  {
    from: 'haredi-education',
    to: 'haredi-employment',
    strength: 5,
    description: '84% ללא ליבה = 49% תעסוקת גברים'
  },
  {
    from: 'haredi-education',
    to: 'bagrut-decline',
    strength: 5,
    description: '11% בגרות חרדית מוריד ממוצע ארצי'
  },
  {
    from: 'haredi-employment',
    to: 'tax-concentration',
    strength: 4,
    description: 'תעסוקה חלקית = תרומת מס חלקית'
  },
  {
    from: 'haredi-employment',
    to: 'dual-economy',
    strength: 4,
    description: '49% הכנסה בלבד מגבר לא-חרדי'
  },
  {
    from: 'demographic-shift',
    to: 'bagrut-decline',
    strength: 5,
    description: '31% חרדים ב-2050 = ירידה מבנית בבגרות'
  },
  {
    from: 'demographic-shift',
    to: 'brain-base-shrinking',
    strength: 5,
    description: 'קוהורטים קטנים יותר של תלמידים לליבה מדעית'
  },
  {
    from: 'dual-economy',
    to: 'tax-concentration',
    strength: 5,
    description: '10% מייצרים 46% מהמס'
  },
  {
    from: 'dual-economy',
    to: 'brain-base-shrinking',
    strength: 4,
    description: 'ריכוז תעסוקה ב-93% מהפירמות = ללא אפקט גליץ׳'
  },
  {
    from: 'idf-sorting',
    to: 'dual-economy',
    strength: 4,
    description: '8200 → הייטק — מיין ולא משווה'
  },
  {
    from: 'idf-sorting',
    to: 'haredi-employment',
    strength: 3,
    description: 'פטור מצבא = חסר רשת מקצועית'
  },
  {
    from: 'arab-education',
    to: 'dual-economy',
    strength: 3,
    description: 'פער 348 נק׳ PISA = יציאה מאולצת מההייטק'
  },
  {
    from: 'periphery-gap',
    to: 'teacher-quality',
    strength: 4,
    description: 'מורים חלשים בבתי ספר פריפריאליים'
  },
  {
    from: 'periphery-gap',
    to: 'bagrut-decline',
    strength: 3,
    description: 'אשכולות 1-2 עם שיעור בגרות נמוך'
  },
  {
    from: 'reform-failure',
    to: 'political-incentives',
    strength: 5,
    description: '9 שרים = אין אופק לרפורמה'
  },
  {
    from: 'political-incentives',
    to: 'haredi-education',
    strength: 5,
    description: 'תקציב ללא תנאי ליבה = מערכת מקובעת'
  },
  {
    from: 'ai-opportunity',
    to: 'agency-deficit',
    strength: 4,
    description: 'AI מנחה: +1.3 SD. חופשי: -17%'
  },
  {
    from: 'agency-deficit',
    to: 'reform-failure',
    strength: 3,
    description: 'מערכת שלא מלמדת לחשוב עצמאית — לא יכולה להשתנות'
  },
  {
    from: 'teacher-quality',
    to: 'arab-education',
    strength: 3,
    description: 'שכר אחיד = מורים חלשים בפריפריה הערבית'
  },
  {
    from: 'brain-base-shrinking',
    to: 'dual-economy',
    strength: 5,
    description: 'דירוג פרסומים מדעיים: ממקום 1 ל-13'
  }
];

export function getConnectedEdges(nodeId: string): Edge[] {
  return EDGES.filter(e => e.from === nodeId || e.to === nodeId);
}
