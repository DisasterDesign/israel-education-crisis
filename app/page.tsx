import { NODES, CATEGORY_LABELS } from '@/data/nodes';
import { EDGES } from '@/data/edges';
import { GraphWrapper } from '@/components/graph/GraphWrapper';
import Link from 'next/link';

export default function HomePage() {
  const nodeCount = NODES.length;
  const edgeCount = EDGES.length;

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs font-mono text-accent tracking-widest mb-6">
            <span data-number>{nodeCount}</span> בעיות ·{' '}
            <span data-number>{edgeCount}</span> קשרים · אפס פתרונות מוכנים
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight">
            מערכת החינוך בישראל
            <br />
            <span className="text-accent">מפת המשבר</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed">
            פלטפורמה ויזואלית שמציגה את משבר החינוך בישראל כרשת בעיות מחוברות.
            כל נתון מגובה במקור. המטרה להבין את המבנה — לא לספק פתרון.
          </p>

          <div className="mt-10 inline-flex items-center gap-5 card rounded-lg py-5 px-6">
            <span
              data-number
              className="text-5xl sm:text-6xl font-black text-accent leading-none"
            >
              84%
            </span>
            <span className="text-sm text-text-secondary leading-tight max-w-[14rem]">
              מהבנים במערכת החרדית
              <br />
              מסיימים בית ספר ללא לימודי ליבה
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#graph"
              className="inline-flex items-center gap-2 bg-accent text-bg-primary px-6 py-3 rounded font-bold hover:bg-accent-hover transition-colors"
            >
              התחל לחקור
              <span>↓</span>
            </a>
            <Link
              href="/simulate/"
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded font-bold hover:border-accent hover:text-accent transition-colors"
            >
              <span>←</span>
              משוך חוט
            </Link>
          </div>
        </div>
      </section>

      <section id="graph" className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold">מפת הצמתים</h2>
            <div className="text-xs text-text-muted">
              לחץ על צומת לפרטים · העבר עכבר למידע נוסף
            </div>
          </div>
        </div>
        <div className="relative h-[70vh] min-h-[500px] mb-20">
          <GraphWrapper />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="mb-8 flex items-baseline justify-between flex-wrap gap-2">
          <h2 className="text-2xl sm:text-3xl font-bold">כל {nodeCount} הצמתים</h2>
          <a
            href="#graph"
            className="text-sm text-text-secondary hover:text-accent transition-colors"
          >
            חזרה למפה ↑
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {NODES.map(node => (
            <Link
              key={node.id}
              href={`/node/${node.slug}/`}
              className="card rounded-lg p-5 group flex flex-col"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <span
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold"
                  style={{
                    background: `color-mix(in srgb, var(--color-${node.category}) 15%, transparent)`,
                    color: `var(--color-${node.category})`
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: `var(--color-${node.category})` }}
                  />
                  {CATEGORY_LABELS[node.category]}
                </span>
                <span
                  className="text-[10px] font-mono text-text-muted"
                  data-number
                  title="ציון חומרה"
                >
                  חומרה {node.severity}/10
                </span>
              </div>
              <div className="font-bold group-hover:text-accent transition-colors leading-tight mb-2">
                {node.title}
              </div>
              <div className="text-xs text-text-muted leading-relaxed flex-1">
                {node.subtitle}
              </div>
              <div className="mt-4 h-0.5 bg-bg-elevated rounded overflow-hidden">
                <div
                  className="h-full transition-all"
                  style={{
                    width: `${node.severity * 10}%`,
                    background: `var(--color-${node.category})`
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
