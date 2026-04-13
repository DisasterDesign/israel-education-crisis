import { SOURCES } from '@/data/sources';

interface ResearchPaper {
  sourceId: 'paradox' | 'demographic' | 'idf' | 'reform' | 'ai' | 'agency';
  title: string;
  summary: string;
  keyFindings: string[];
  pages: number;
  sizeKb: number;
}

const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    sourceId: 'paradox',
    title: 'הפרדוקס הישראלי: חינוך בינוני, כלכלה של קצוות',
    summary:
      'מחקר עומק בעברית שמנתח את הפער בין רמת החינוך הממוצעת (בינונית בקנה מידה עולמי) לבין מבנה כלכלה של קצוות — ריכוז תפוקה ומס במיעוט מהאוכלוסייה. מכסה את ההרכב הדמוגרפי, תקציבי ליבה, ופערי בגרות בין המגזרים.',
    keyFindings: [
      '84% מהבנים החרדים לומדים ללא ליבה',
      'העשירון העליון משלם 46% מהמס',
      '11.5% גידול שנתי בתקציב חינוך חרדי ללא תנאי ליבה'
    ],
    pages: 6,
    sizeKb: 445
  },
  {
    sourceId: 'demographic',
    title: 'השינוי הדמוגרפי של ישראל',
    summary:
      'מחקר על השינוי הדמוגרפי המבני של ישראל ב-25 השנים הקרובות. פורס תחזיות לשיעור הגידול של החברה החרדית והערבית, ולהשפעות על הכלכלה וחינוך הליבה.',
    keyFindings: [
      '23.8% חרדים בכיתה א׳ (2025)',
      'תחזית של 31% חרדים באוכלוסייה ב-2050',
      '42,751 תלמידים חרדים בקוהורט'
    ],
    pages: 6,
    sizeKb: 521
  },
  {
    sourceId: 'idf',
    title: 'הצבא כמנוע כוח העבודה הסמוי של ישראל',
    summary:
      'ניתוח של תפקיד הצבא כמחוללת כלכלית ומיינת קריירות. מסביר איך 8200 ויחידות טכנולוגיות הפכו לצינור ההייטק של ישראל, ואיך הפטור ההמוני מצבא יוצר סיכון עבודה חדש.',
    keyFindings: [
      '25% מעובדי ההייטק בוגרי 8200',
      '49% תעסוקת גברים חרדים מול 76% לא-חרדים',
      '7,000-10,000 בוגרי יחידות טכנולוגיות בשנה'
    ],
    pages: 5,
    sizeKb: 418
  },
  {
    sourceId: 'reform',
    title: 'מה באמת עובד ברפורמות חינוך רחבות היקף',
    summary:
      'מטא-אנליזה של רפורמות בחינוך ברחבי העולם. מצביע על תקופות זמן קריטיות, תנאי הצלחה, ולמה רוב הרפורמות נכשלות — לא בגלל התוכן, אלא בגלל המסגרת הפוליטית.',
    keyFindings: [
      'רפורמה דרשה בממוצע 10 שנים לאפקט מדיד',
      'שינויי מבנה > שינויי תוכנית',
      'אוטונומיה למנהלים = אפקט חזק במיוחד'
    ],
    pages: 11,
    sizeKb: 699
  },
  {
    sourceId: 'ai',
    title: 'בינה מלאכותית בחינוך — מה ידוע ומה מנחשים',
    summary:
      'סקירת נתוני RCTs על שימוש ב-AI בחינוך. ההבדל המהותי: תלמידים בהדרכה מובנית = +1.3 SD. תלמידים בשימוש חופשי = −17% בתוצאה. כלי אחד, שני עולמות.',
    keyFindings: [
      '+1.3 SD עם הדרכה (Khan Academy)',
      '−17% ללא הדרכה',
      'פער הישגים גדל עם AI חופשי'
    ],
    pages: 8,
    sizeKb: 535
  },
  {
    sourceId: 'agency',
    title: 'סוכנות התלמיד כיעד חינוכי',
    summary:
      'סינתזת מחקר על "סוכנות תלמיד" — היכולת ללמוד עצמאית. מראה שהגודל של האפקט (d = 0.40) מקביל לאיכות מורים במערכות מצליחות. משמעות: זה לא "רך" — זו תשתית הישג.',
    keyFindings: [
      'אפקט סוכנות: d = 0.40',
      'אוטונומיה תלמיד: d = 0.52',
      'יתרון בטחון עצמי: +0.21'
    ],
    pages: 9,
    sizeKb: 558
  }
];

function formatSize(kb: number): string {
  if (kb < 1024) return `${kb} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

export default function ResearchPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs font-mono text-accent tracking-widest mb-4">
          מחקרים
        </div>
        <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
          המחקרים
        </h1>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          6 מחקרי עומק ששימשו כבסיס נתונים לפלטפורמה. כל מחקר זמין להורדה מלאה.
        </p>
      </div>

      <div className="space-y-6">
        {RESEARCH_PAPERS.map(paper => {
          const source = SOURCES[paper.sourceId];
          return (
            <article
              key={paper.sourceId}
              className="card rounded-lg p-6 sm:p-8"
            >
              <header className="mb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-xl sm:text-2xl font-bold leading-snug">
                    {paper.title}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono text-text-muted">
                  <span className="ltr" data-number>
                    {source.year}
                  </span>
                  <span>·</span>
                  <span className="ltr" data-number>
                    {paper.pages} עמודים
                  </span>
                  <span>·</span>
                  <span className="ltr" data-number>
                    {formatSize(paper.sizeKb)}
                  </span>
                  <span>·</span>
                  <span>PDF</span>
                </div>
              </header>

              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {paper.summary}
              </p>

              <div className="mb-5">
                <div className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
                  ממצאים מרכזיים
                </div>
                <ul className="space-y-1">
                  {paper.keyFindings.map((f, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-primary flex gap-2"
                    >
                      <span className="text-accent">◦</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {source.file && (
                <a
                  href={source.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs bg-accent text-bg-primary px-4 py-2 rounded font-bold hover:bg-accent-hover transition-colors"
                >
                  הורד PDF מלא
                  <span>↓</span>
                </a>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
