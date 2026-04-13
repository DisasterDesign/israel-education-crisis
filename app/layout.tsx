import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'רשת — מערכת החינוך בישראל: מפת המשבר',
  description:
    'פלטפורמה ויזואלית אינטראקטיבית שמציגה את משבר החינוך בישראל כרשת בעיות מחוברות. צמתים, קשרים, אפס פתרונות מוכנים.',
  openGraph: {
    title: 'רשת — מערכת החינוך בישראל',
    description: 'מפת המשבר — 15 בעיות מרכזיות, 19 קשרים, נתונים בלבד',
    locale: 'he_IL',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
