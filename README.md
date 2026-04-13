# רשת — מערכת החינוך בישראל: מפת המשבר

פלטפורמה ויזואלית אינטראקטיבית שמציגה את משבר החינוך בישראל כרשת בעיות מחוברות.

## הרצה מקומית

```bash
npm install
npm run dev
```

פתח http://localhost:3000

## בנייה

```bash
npm run build
```

הפלט ב-`out/` (static export).

## דפלוי ל-Cloudflare Pages

```bash
npm run deploy
```

## מבנה

- `app/` — עמודי Next.js App Router
- `components/` — רכיבי UI
- `data/` — צמתים, קשתות, ניסויים, מקורות
- `lib/` — מנוע סימולציה, פריסת גרף, פורמטרים

## מקורות

ראה `app/research/` באתר או תיקיית `public/research/`.
