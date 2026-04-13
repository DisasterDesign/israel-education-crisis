import { SOURCES } from '@/data/sources';

const RESEARCH_PAPERS = [
  {
    sourceId: 'paradox' as const,
    title: 'הפרדוקס הישראלי: חינוך בינוני, כלכלה של קצוות',
    summary:
      'מחקר עומק בעברית שמנתח את הפער בין רמת החינוך הממוצעת (בינונית בקנה מידה עולמי) לבין מבנה כלכלה של קצוות — ריכוז תפוקה ומס במיעוט מהאוכלוסייה. מכסה את ההרכב הדמוגרפי, תקציבי ליבה, ופערי בגרות בין המגזרים.',
    keyFindings: [
      '84% מהבנים החרדים לומדים ללא ליבה',
      'העשירון העליון משלם 46% מהמס',
      '11.5% גידול שנתי בתקציב חינוך חרדי ללא תנאי ליבה'
    ]
  },
  {
    sourceId: 'demographic' as const,
    title: "Israel's Demographic Transformation",
    summary:
      'מחקר על השינוי הדמוגרפי המבני של ישראל ב-25 השנים הקרובות. פורס תחזיות לשיעור הגידול של החברה החרדית והערבית, ולהשפעות על הכלכלה וחינוך הליבה.',
    keyFindings: [
      '23.8% חרדים בכיתה א׳ (2025)',
      'תחזית של 31% חרדים באוכלוסייה ב-2050',
      '42,751 תלמידים חרדים בקוהורט'
    ]
  },
  {
    sourceId: 'idf' as const,
    title: "The IDF as Israel's Hidden Workforce Engine",
    summary:
      'ניתוח של תפקיד הצבא כמחוללת כלכלית ומיינת קריירות. מסביר איך 8200 ויחידות טכנולוגיות הפכו לצינור ההייטק של ישראל, ואיך הפטור ההמוני מצבא יוצר סיכון עבודה חדש.',
    keyFindings: [
      '25% מעובדי ההייטק בוגרי 8200',
      '49% תעסוקת גברים חרדים מול 76% לא-חרדים',
      '7,000-10,000 בוגרי יחידות טכנולוגיות בשנה'
    ]
  },
  {
    sourceId: 'reform' as const,
    title: 'What Works in Large-Scale Education Reform',
    summary:
      'מטא-אנליזה של רפורמות בחינוך ברחבי העולם. מצביע על תקופות זמן קריטיות, תנאי הצלחה, ולמה רוב הרפורמות נכשלות — לא בגלל התוכן, אלא בגלל המסגרת הפוליטית.',
    keyFindings: [
      'רפורמה דרשה בממוצע 10 שנים לאפקט מדיד',
      'שינויי מבנה > שינויי תוכנית',
      'אוטונומיה למנהלים = אפקט חזק במיוחד'
    ]
  },
  {
    sourceId: 'ai' as const,
    title: 'AI in Education: What We Know, What We Guess',
    summary:
      'סקירת נתוני RCTs על שימוש ב-AI בחינוך. ההבדל המהותי: תלמידים בהדרכה מובנית = +1.3 SD. תלמידים בשימוש חופשי = -17% בתוצאה. כלי אחד, שני עולמות.',
    keyFindings: [
      '+1.3 SD עם הדרכה (Khan Academy)',
      '−17% ללא הדרכה',
      'פער הישגים גדל עם AI חופשי'
    ]
  },
  {
    sourceId: 'agency' as const,
    title: 'Student Agency as an Educational Goal',
    summary:
      'סינתזת מחקר על "סוכנות תלמיד" — היכולת ללמוד עצמאית. מראה שהגודל של האפקט (d = 0.40) מקביל לאיכות מורים במערכות מצליחות. משמעות: זה לא "רך" — זו תשתית הישג.',
    keyFindings: [
      'אפקט סוכנות: d = 0.40',
      'אוטונומיה תלמיד: d = 0.52',
      'יתרון בטחון עצמי: +0.21'
    ]
  }
];

export default function ResearchPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs font-mono text-accent tracking-widest mb-4">
          RESEARCH
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
              <header className="flex items-start justify-between gap-4 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold leading-snug">
                  {paper.title}
                </h2>
                <span className="text-xs font-mono text-text-muted ltr shrink-0">
                  {source.year}
                </span>
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
                  className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                >
                  ← הורד PDF מלא
                </a>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
