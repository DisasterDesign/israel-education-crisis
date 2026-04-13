import type { SourceId } from './sources';

export type NodeCategory = 'education' | 'economy' | 'demographics' | 'military';

export interface KPI {
  label: string;
  value: string;
  numeric?: number;
  unit?: string;
  source: SourceId;
  year: number;
  note?: string;
}

export interface ProblemNode {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  subtitle: string;
  description: string;
  category: NodeCategory;
  severity: number; // 1-10
  kpis: KPI[];
}

export const CATEGORY_COLORS: Record<NodeCategory, string> = {
  education: '#FF6B4A',
  economy: '#4AAFFF',
  demographics: '#FFD84A',
  military: '#4AFF8B'
};

export const CATEGORY_LABELS: Record<NodeCategory, string> = {
  education: 'חינוך',
  economy: 'כלכלה',
  demographics: 'דמוגרפיה',
  military: 'צבא'
};

export const NODES: ProblemNode[] = [
  {
    id: 'haredi-education',
    slug: 'haredi-education',
    title: 'חינוך חרדי — ארבע מערכות מקבילות',
    titleEn: 'Haredi Education',
    subtitle: 'מערכת נפרדת ללא ליבה, עם תקציב מלא ותוצאות שחורגות מהמדידה הארצית',
    description:
      'מערכת החינוך החרדית פועלת בתקציב מדינה אך ללא לימודי ליבה לרוב הבנים. התוצאה: דור שלא נכנס לשוק העבודה המודרני.',
    category: 'education',
    severity: 10,
    kpis: [
      {
        label: 'בנים חרדים ללא ליבה',
        value: '84%',
        numeric: 84,
        unit: '%',
        source: 'paradox',
        year: 2024
      },
      {
        label: 'שיעור בגרות במגזר חרדי',
        value: '11%',
        numeric: 11,
        unit: '%',
        source: 'paradox',
        year: 2024
      },
      {
        label: 'ילדי כיתה א׳ חרדים',
        value: '30.9%',
        numeric: 30.9,
        unit: '%',
        source: 'demographic',
        year: 2025
      },
      {
        label: 'תלמידים חרדים בקוהורט',
        value: '42,751',
        numeric: 42751,
        source: 'demographic',
        year: 2025
      }
    ]
  },
  {
    id: 'arab-education',
    slug: 'arab-education',
    title: 'פער PISA ערבי-יהודי',
    titleEn: 'Arab-Jewish Education Gap',
    subtitle: 'פער של 5-7 שנות לימוד בין המגזרים — תוצאה של תת-השקעה מבנית ארוכת שנים',
    description:
      'המגזר הערבי רושם את ציוני PISA הנמוכים בישראל. הפער לא צפוי להיסגר בקצב הנוכחי, למרות שהוא מהווה 15% מהקוהורט.',
    category: 'education',
    severity: 8,
    kpis: [
      {
        label: 'פער PISA מממוצע OECD (קריאה)',
        value: '−348 נק׳',
        numeric: -348,
        source: 'paradox',
        year: 2024
      },
      {
        label: 'שיעור שליטה בקריאה',
        value: '54.4%',
        numeric: 54.4,
        unit: '%',
        source: 'paradox',
        year: 2024
      },
      {
        label: 'אחוז ילדי כיתה א׳',
        value: '15.0%',
        numeric: 15,
        unit: '%',
        source: 'demographic',
        year: 2025
      },
      {
        label: 'תלמידים ערבים בקוהורט',
        value: '26,975',
        numeric: 26975,
        source: 'demographic',
        year: 2025
      }
    ]
  },
  {
    id: 'periphery-gap',
    slug: 'periphery-gap',
    title: 'פער פריפריה-מרכז',
    titleEn: 'Center-Periphery Gap',
    subtitle: 'הפער האזורי מייצר שני מסלולים מקבילים במערכת אחת',
    description:
      'תלמיד באשכול 1-2 נפגש במציאות שונה מזו של תלמיד באשכול 9-10: מורים חלשים יותר, תקציב נמוך יותר, תוצאות שונות בסדר גודל.',
    category: 'education',
    severity: 7,
    kpis: [
      {
        label: 'פער PISA מתמטיקה (פריפריה–מרכז)',
        value: '−5.5 נק׳',
        numeric: -5.5,
        source: 'paradox',
        year: 2024
      },
      {
        label: 'פער שליטה בחומר הלימוד',
        value: '20%',
        numeric: 20,
        unit: '%',
        source: 'paradox',
        year: 2024
      },
      {
        label: 'פער שכר מורים',
        value: '15-20%',
        numeric: 17,
        unit: '%',
        source: 'paradox',
        year: 2024
      }
    ]
  },
  {
    id: 'bagrut-decline',
    slug: 'bagrut-decline',
    title: 'ירידת בגרות ארצית צפויה',
    titleEn: 'Projected National Bagrut Decline',
    subtitle: 'תחזיות הדמוגרפיה מתורגמות לירידה מבנית בשיעור הבגרות הארצי עד 2050',
    description:
      'גם בלי שינוי מדיניות, ההרכב הדמוגרפי לבדו יוריד את שיעור הבגרות הארצי בלמעלה מחמישית תוך רבע מאה.',
    category: 'education',
    severity: 9,
    kpis: [
      {
        label: 'תחזית ירידה בבגרות עד 2050',
        value: '−24%',
        numeric: -24,
        unit: '%',
        source: 'paradox',
        year: 2024
      },
      {
        label: 'שיעור בגרות ארצי נוכחי',
        value: '12.5-14.3%',
        numeric: 13.4,
        unit: '%',
        source: 'paradox',
        year: 2024
      },
      {
        label: 'בגרות חרדית (חינוך ממלכתי)',
        value: '45.6%',
        numeric: 45.6,
        unit: '%',
        source: 'paradox',
        year: 2024
      }
    ]
  },
  {
    id: 'demographic-shift',
    slug: 'demographic-shift',
    title: 'המהפך הדמוגרפי',
    titleEn: 'Demographic Shift',
    subtitle: 'ההרכב הדמוגרפי של כיתה א׳ משתנה מהר יותר מכל מדיניות חינוך',
    description:
      'בקוהורט של 2025 כמעט שליש מהילדים חרדים. ב-2050 החרדים יהוו כ-31% מהאוכלוסייה. הביקוש לשינוי יגיע — השאלה אם המערכת מוכנה.',
    category: 'demographics',
    severity: 10,
    kpis: [
      {
        label: 'חרדים בכיתה א׳ (2025)',
        value: '23.8%',
        numeric: 23.8,
        unit: '%',
        source: 'demographic',
        year: 2025
      },
      {
        label: 'תחזית חרדים באוכלוסייה 2050',
        value: '31%',
        numeric: 31,
        unit: '%',
        source: 'demographic',
        year: 2025
      },
      {
        label: 'פריון ילודה ארצי',
        value: '2.91-3.0',
        numeric: 2.95,
        source: 'demographic',
        year: 2024
      }
    ]
  },
  {
    id: 'haredi-employment',
    slug: 'haredi-employment',
    title: 'תעסוקת גברים חרדים',
    titleEn: 'Haredi Male Employment',
    subtitle: '49% תעסוקה מול 76% במגזר הלא-חרדי — פער שנפער ב-15 שנות השכלה חסרות',
    description:
      'ללא ליבה בבית הספר, היציאה לשוק העבודה הופכת לחסם. התוצאה היא פער תעסוקתי מבני שמשפיע על כל כלכלת ישראל.',
    category: 'economy',
    severity: 9,
    kpis: [
      {
        label: 'תעסוקת גברים חרדים',
        value: '49%',
        numeric: 49,
        unit: '%',
        source: 'idf',
        year: 2025
      },
      {
        label: 'תעסוקת גברים לא-חרדים',
        value: '76%',
        numeric: 76,
        unit: '%',
        source: 'idf',
        year: 2025
      },
      {
        label: 'יעד תעסוקה לסגירת פער GDP',
        value: '80%',
        numeric: 80,
        unit: '%',
        source: 'idf',
        year: 2025
      },
      {
        label: 'גברים חרדים בשירות צבאי',
        value: '≈10%',
        numeric: 10,
        unit: '%',
        source: 'idf',
        year: 2025
      }
    ]
  },
  {
    id: 'dual-economy',
    slug: 'dual-economy',
    title: 'כלכלה דואלית — הייטק מול השאר',
    titleEn: 'Dual Economy',
    subtitle: 'ישראל מפעילה שתי כלכלות מקבילות: גלובלית-יצרנית בראש, ומקומית-שכר נמוך בבסיס',
    description:
      'רוב התפוקה הלאומית מיוצרת על ידי פחות מרבע מכוח העבודה. זה לא רק פער שכר — זו מערכת שמוציאה את רוב הילדים מהמסלול הערכי-חומרי.',
    category: 'economy',
    severity: 8,
    kpis: [
      {
        label: 'חלק הייטק ב-GDP לנפש',
        value: '40%',
        numeric: 40,
        unit: '%',
        source: 'paradox',
        year: 2024
      },
      {
        label: 'ריכוז תעסוקה ב-20% הפירמות המובילות',
        value: '93%',
        numeric: 93,
        unit: '%',
        source: 'paradox',
        year: 2024
      },
      {
        label: 'חלק בוגרי 8200 בהייטק',
        value: '25%',
        numeric: 25,
        unit: '%',
        source: 'idf',
        year: 2025
      }
    ]
  },
  {
    id: 'tax-concentration',
    slug: 'tax-concentration',
    title: 'ריכוז מס — 45% מ-10% העשירונים העליונים',
    titleEn: 'Tax Concentration',
    subtitle: 'הכנסות המדינה תלויות בקבוצה מצטמצמת. אם היא זזה, הכל זז',
    description:
      'ככל שהכלכלה הדואלית מתקבעת, ריכוז המס הופך למבני. שינוי בכלכלת ההייטק או בהגירה של העשירון העליון עלול לזעזע את התקציב כולו.',
    category: 'economy',
    severity: 8,
    kpis: [
      {
        label: 'חלק העשירון העליון בהכנסות מס',
        value: '45.9%',
        numeric: 45.9,
        unit: '%',
        source: 'paradox',
        year: 2024
      },
      {
        label: 'חלק האחוזון העליון',
        value: '14.2%',
        numeric: 14.2,
        unit: '%',
        source: 'paradox',
        year: 2024
      },
      {
        label: 'חלק 0.1% העליונים',
        value: '5.4%',
        numeric: 5.4,
        unit: '%',
        source: 'paradox',
        year: 2024
      }
    ]
  },
  {
    id: 'idf-sorting',
    slug: 'idf-sorting',
    title: 'הצבא כמיינת — לא כמשווה',
    titleEn: 'IDF as Sorter',
    subtitle: 'השירות הצבאי יוצר מסלולי-על לחלק ומסלולי יציאה לרוב',
    description:
      'ב-8200 וביחידות הטכנולוגיות מתחבטים קריירות הייטק. אבל שירות רגיל נותן הרבה פחות. הצבא לא משטח — הוא מגביר את הפערים.',
    category: 'military',
    severity: 7,
    kpis: [
      {
        label: 'בוגרי 8200 בהייטק',
        value: '25%',
        numeric: 25,
        unit: '%',
        source: 'idf',
        year: 2025
      },
      {
        label: 'בוגרי יח׳ טכנולוגיות שנה',
        value: '7,000-10,000',
        numeric: 8500,
        source: 'idf',
        year: 2025
      },
      {
        label: 'חלק יחידות הסייבר מתעשיית ההייטק',
        value: '47%',
        numeric: 47,
        unit: '%',
        source: 'idf',
        year: 2025
      }
    ]
  },
  {
    id: 'brain-base-shrinking',
    slug: 'brain-base-shrinking',
    title: 'הבסיס האנושי מצטמצם',
    titleEn: 'Shrinking Knowledge Base',
    subtitle: 'ישראל ירדה ממקום 1 במדדי פרסום מדעי לנפש — לא כי היא ירדה, אלא כי השאר עלו',
    description:
      'כלכלת הידע הישראלית נשענת על בסיס מדעי שהיה פעם ייחודי. השחיקה שלו כבר לא שאלה תיאורטית.',
    category: 'economy',
    severity: 7,
    kpis: [
      {
        label: 'דירוג פרסומים מדעיים לנפש (ירידה)',
        value: 'ממקום 1 ל-13',
        source: 'paradox',
        year: 2024
      },
      {
        label: 'יחס הוצאת מו״פ לממוצע OECD',
        value: '×2',
        numeric: 2,
        source: 'paradox',
        year: 2024
      },
      {
        label: 'מדינות OECD שעברו את ישראל',
        value: '25%',
        numeric: 25,
        unit: '%',
        source: 'paradox',
        year: 2024
      }
    ]
  },
  {
    id: 'reform-failure',
    slug: 'reform-failure',
    title: 'רפורמות נכשלות — למה',
    titleEn: 'Reform Failure',
    subtitle: '9 שרי חינוך ב-18 שנה. כל רפורמה נקרעת מהשורש לפני שהיא מייצרת תוצאה מדידה',
    description:
      'מחקרי הרפורמה מראים שדרוש עשור לפחות כדי לזהות השפעה ברת-קיימא. ישראל לא נותנת לרפורמה לחיות מספיק זמן.',
    category: 'education',
    severity: 8,
    kpis: [
      {
        label: 'שרי חינוך מאז 2006',
        value: '9',
        numeric: 9,
        source: 'paradox',
        year: 2024
      },
      {
        label: 'תוחלת חיים של רפורמה (ממוצע)',
        value: '≈2 שנים',
        numeric: 2,
        source: 'reform',
        year: 2024
      },
      {
        label: 'רפורמות עם תוצאות בגרות ברות-קיימא',
        value: '0',
        numeric: 0,
        source: 'reform',
        year: 2024
      }
    ]
  },
  {
    id: 'political-incentives',
    slug: 'political-incentives',
    title: 'תמריצים פוליטיים נגד שינוי',
    titleEn: 'Political Incentives',
    subtitle: 'תקציב חינוך חרדי גדל 11.5% בשנה ללא תנאי ליבה — מערכת פוליטית שמתגמלת את הקיים',
    description:
      'כשהקואליציה תלויה במגזר שמתנגד לשינוי, כל רפורמה שמחייבת ליבה נעצרת ברמת המסדרון. זה לא כישלון ביצועי, זו הנדסה פוליטית.',
    category: 'education',
    severity: 9,
    kpis: [
      {
        label: 'גידול תקציב חינוך חרדי (שנתי)',
        value: '11.5%',
        numeric: 11.5,
        unit: '%',
        source: 'paradox',
        year: 2024
      },
      {
        label: 'תקציב ליבה לחינוך חרדי',
        value: '₪317M',
        numeric: 317_000_000,
        source: 'paradox',
        year: 2024
      },
      {
        label: 'קיצוץ מדדי אחריותיות',
        value: '−36%',
        numeric: -36,
        unit: '%',
        source: 'paradox',
        year: 2024
      }
    ]
  },
  {
    id: 'teacher-quality',
    slug: 'teacher-quality',
    title: 'איכות מורים בפריפריה',
    titleEn: 'Teacher Quality',
    subtitle: 'שכר אחיד ומבני שליטה מרכזיים → המורים החלשים ביותר מסיימים בבית ספר החלש ביותר',
    description:
      'במערכות מצליחות המורים הטובים ביותר מגיעים לבתי הספר הקשים. בישראל קורה ההפך — והמדיניות הנוכחית מעודדת זאת.',
    category: 'education',
    severity: 7,
    kpis: [
      {
        label: 'מקדם ג׳יני שכר מורים',
        value: '0.345',
        numeric: 0.345,
        source: 'paradox',
        year: 2024
      },
      {
        label: 'פער כישורי מורים פריפריה-מרכז',
        value: '20%',
        numeric: 20,
        unit: '%',
        source: 'paradox',
        year: 2024
      },
      {
        label: 'שחיקת מורים באשכולות 1-2',
        value: '−15%',
        numeric: -15,
        unit: '%',
        source: 'reform',
        year: 2024
      }
    ]
  },
  {
    id: 'ai-opportunity',
    slug: 'ai-opportunity',
    title: 'בינה מלאכותית — הזדמנות ואיום',
    titleEn: 'AI Opportunity & Threat',
    subtitle: 'AI תחת הדרכה מורית = +1.3 סטיות תקן. AI חופשי = −17% בתוצאה',
    description:
      'הבשורה: תלמידים שלומדים עם AI בהדרכה מקדימים בחדות את הבסיס. הסכנה: אותו כלי בשימוש לא-מונחה פוגע בהם.',
    category: 'education',
    severity: 6,
    kpis: [
      {
        label: 'גודל אפקט AI בהדרכה (Khan Academy)',
        value: '+1.3 SD',
        numeric: 1.3,
        source: 'ai',
        year: 2024
      },
      {
        label: 'שימוש חופשי בכלי AI',
        value: '−17%',
        numeric: -17,
        unit: '%',
        source: 'ai',
        year: 2024
      },
      {
        label: 'שיפור ציונים (ChatGPT מנחה)',
        value: '+18%',
        numeric: 18,
        unit: '%',
        source: 'ai',
        year: 2024
      }
    ]
  },
  {
    id: 'agency-deficit',
    slug: 'agency-deficit',
    title: 'חוסר סוכנות עצמית במערכת',
    titleEn: 'Agency Deficit',
    subtitle: 'המערכת מלמדת לעמוד במבחן, לא ללמוד עצמאית — וזה נמדד',
    description:
      'אפקט סוכנות התלמיד (d = 0.40) בסדר גודל של איכות מורים. מערכת שמתעלמת מזה משאירה חלק גדול מההישג על הרצפה.',
    category: 'education',
    severity: 6,
    kpis: [
      {
        label: 'גודל אפקט סוכנות תלמיד',
        value: 'd = 0.40',
        numeric: 0.4,
        source: 'agency',
        year: 2024
      },
      {
        label: 'תמיכה באוטונומיה',
        value: 'd = 0.52',
        numeric: 0.52,
        source: 'agency',
        year: 2024
      },
      {
        label: 'יתרון גרעין בטחון עצמי',
        value: '+0.21',
        numeric: 0.21,
        source: 'agency',
        year: 2024
      }
    ]
  }
];

export function getNodeBySlug(slug: string): ProblemNode | undefined {
  return NODES.find(n => n.slug === slug);
}
