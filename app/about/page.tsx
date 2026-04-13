export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <div className="text-xs font-mono text-accent tracking-widest mb-4">
          ABOUT
        </div>
        <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
          על הפרויקט
        </h1>
      </div>

      <div className="space-y-10 text-text-primary leading-relaxed">
        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">
            למה
          </h2>
          <p>
            הדיון הציבורי על חינוך בישראל מתנהל בלי מפה. כל צד מציג את הנתון
            שמשרת אותו, וכל נתון מופיע במנותק מהקשר. הפרויקט הזה לא מנסה לשכנע
            אף אחד במשהו — הוא מנסה להראות את המבנה.
          </p>
          <p className="mt-4">
            15 בעיות. 19 קשרים בין בעיות. 14 ניסויים במדינות אחרות שמראים מה
            קרה כשניסו לטפל בבעיות דומות. אפס פתרונות מוכנים.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">
            מתודולוגיה
          </h2>
          <p>
            כל נתון באתר מגיע ממחקר מוסדי מצוטט — המכון הישראלי לדמוקרטיה,
            מרכז טאוב, למ״ס, OECD, שורש, ומחקרי עומק ספציפיים שצורפו לפרויקט
            (ראה{' '}
            <a
              href="/research/"
              className="text-accent hover:underline"
            >
              דף המחקרים
            </a>
            ). כל מספר מוצג עם התגית המקור הלחיצה שלו.
          </p>
          <p className="mt-4">
            במקומות שבהם המחקר לא כיסה את הסעיף — הנתון מסומן כ"TBD" או
            מוסתר. לא ממציאים מספרים.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">
            הסימולציה
          </h2>
          <p>
            כלי "משוך חוט" מאפשר לשנות 4 פרמטרים ולראות השפעות. המודל מבוסס
            על שני תרחישי IDI (קיפאון vs התכנסות), עם אינטרפולציה לינארית
            ביניהם. כל הנוסחה חשופה במסך עצמו — אין קופסה שחורה.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">
            מה הפרויקט לא עושה
          </h2>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span className="text-accent shrink-0">◦</span>
              <span>לא מציע פתרונות. לא מדרג "מה עדיף".</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">◦</span>
              <span>לא מציג מספר בלי מקור.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">◦</span>
              <span>לא משתמש בירוק/אדום לניסויים. כולם באותו עיצוב.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">◦</span>
              <span>לא מתיימר להחליף דיון — מתיימר לתת לו בסיס.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">
            קהל יעד
          </h2>
          <p>
            מומחי חינוך, קובעי מדיניות, אנשי אקדמיה, עיתונאים — וכל מי
            שמעוניין להבין לעומק את המבנה של הבעיה לפני שהוא מחליט מה דעתו.
          </p>
        </section>

        <section className="border-t border-white/5 pt-6 text-xs text-text-muted">
          <p>
            נבנה כפרויקט נתונים פתוח. הקוד, הנתונים והמסמכים זמינים לכל דורש.
          </p>
        </section>
      </div>
    </div>
  );
}
