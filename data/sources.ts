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
    label: "Israel's Demographic Transformation",
    year: 2025,
    file: '/research/demographic-transformation.pdf'
  },
  idf: {
    id: 'idf',
    label: "The IDF as Israel's Hidden Workforce Engine",
    year: 2025,
    file: '/research/idf-workforce.pdf'
  },
  reform: {
    id: 'reform',
    label: 'What Works in Large-Scale Education Reform',
    year: 2024,
    file: '/research/reform-evidence.pdf'
  },
  ai: {
    id: 'ai',
    label: 'AI in Education: What We Know, What We Guess',
    year: 2024,
    file: '/research/ai-education.pdf'
  },
  agency: {
    id: 'agency',
    label: 'Student Agency as an Educational Goal',
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
