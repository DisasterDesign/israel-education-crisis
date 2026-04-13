export interface Source {
  id: string;
  label: string;
  year: number;
  url?: string;
  file?: string;
}

export const SOURCES: Record<string, Source> = {
  paradox: {
    id: 'paradox',
    label: 'הפרדוקס הישראלי: חינוך בינוני, כלכלה של קצוות',
    year: 2024,
    file: '/research/paradox-hebrew.pdf'
  },
  demographic: {
    id: 'demographic',
    label: 'השינוי הדמוגרפי של ישראל',
    year: 2025,
    file: '/research/demographic-transformation.pdf'
  },
  idf: {
    id: 'idf',
    label: 'הצבא כמנוע כוח העבודה הסמוי של ישראל',
    year: 2025,
    file: '/research/idf-workforce.pdf'
  },
  reform: {
    id: 'reform',
    label: 'מה באמת עובד ברפורמות חינוך',
    year: 2024,
    file: '/research/reform-evidence.pdf'
  },
  ai: {
    id: 'ai',
    label: 'בינה מלאכותית בחינוך',
    year: 2024,
    file: '/research/ai-education.pdf'
  },
  agency: {
    id: 'agency',
    label: 'סוכנות התלמיד כיעד חינוכי',
    year: 2024,
    file: '/research/student-agency.pdf'
  },
  idi: {
    id: 'idi',
    label: 'המכון הישראלי לדמוקרטיה (IDI)',
    year: 2024,
    url: 'https://www.idi.org.il'
  },
  taub: {
    id: 'taub',
    label: 'מרכז טאוב',
    year: 2024,
    url: 'https://www.taubcenter.org.il'
  },
  cbs: {
    id: 'cbs',
    label: 'הלשכה המרכזית לסטטיסטיקה',
    year: 2024,
    url: 'https://www.cbs.gov.il'
  },
  oecd: {
    id: 'oecd',
    label: 'OECD / PISA',
    year: 2022,
    url: 'https://www.oecd.org/pisa'
  },
  moe: {
    id: 'moe',
    label: 'משרד החינוך',
    year: 2024
  },
  shoresh: {
    id: 'shoresh',
    label: 'מכון שורש',
    year: 2024
  }
};

export type SourceId = keyof typeof SOURCES;
