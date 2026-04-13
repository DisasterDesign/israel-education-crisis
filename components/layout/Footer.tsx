import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 grid gap-10 sm:grid-cols-3">
        <div>
          <div className="text-sm font-bold mb-2">רשת</div>
          <p className="text-xs text-text-muted leading-relaxed max-w-xs">
            מפת בעיות אינטראקטיבית. בעיות וקשרים — לא פתרונות.
            כל נתון מגובה במקור.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold text-text-secondary mb-3">
            ניווט
          </div>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:text-accent">
                המפה
              </Link>
            </li>
            <li>
              <Link href="/simulate" className="hover:text-accent">
                משוך חוט
              </Link>
            </li>
            <li>
              <Link href="/experiments" className="hover:text-accent">
                ניסויים בעולם
              </Link>
            </li>
            <li>
              <Link href="/research" className="hover:text-accent">
                מחקרים
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent">
                על הפרויקט
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold text-text-secondary mb-3">
            מקורות מרכזיים
          </div>
          <ul className="space-y-1 text-xs text-text-muted leading-relaxed">
            <li>המכון הישראלי לדמוקרטיה (IDI)</li>
            <li>מרכז טאוב</li>
            <li>שורש</li>
            <li>למ״ס</li>
            <li>OECD / PISA</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-xs text-text-muted">
        נבנה כמפת נתונים פתוחה. גרסת {new Date().getFullYear()}.
      </div>
    </footer>
  );
}
