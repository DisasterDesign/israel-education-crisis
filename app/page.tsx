import { NODES } from '@/data/nodes';
import { EDGES } from '@/data/edges';
import { GraphWrapper } from '@/components/graph/GraphWrapper';
import Link from 'next/link';

export default function HomePage() {
  const nodeCount = NODES.length;
  const edgeCount = EDGES.length;

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center hero-gradient">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs font-mono text-accent tracking-widest mb-6">
            MAPA · {nodeCount} NODES · {edgeCount} EDGES
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight">
            מערכת החינוך בישראל
            <br />
            <span className="text-accent">מפת המשבר</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed">
            <span data-number>{nodeCount}</span> צמתים.{' '}
            <span data-number>{edgeCount}</span> קשרים. אפס פתרונות מוכנים.
          </p>
          <p className="mt-4 text-sm text-text-muted max-w-2xl leading-relaxed">
            פלטפורמה ויזואלית שמציגה את משבר החינוך בישראל כרשת בעיות מחוברות.
            כל נתון מגובה במקור. המטרה היא להבין את המבנה — לא לספק פתרון.
          </p>

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
              משוך חוט ←
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

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 gap-4">
          {NODES.slice(0, 6).map(node => (
            <Link
              key={node.id}
              href={`/node/${node.slug}/`}
              className="card rounded-lg p-5 group"
            >
              <div className="flex items-start gap-3">
                <div
                  className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                  style={{ background: `var(--color-${node.category})` }}
                />
                <div className="flex-1">
                  <div className="font-bold group-hover:text-accent transition-colors">
                    {node.title}
                  </div>
                  <div className="text-xs text-text-muted mt-1 leading-relaxed">
                    {node.subtitle}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/simulate/"
            className="text-sm text-text-secondary hover:text-accent"
          >
            כל 15 הצמתים במפה למעלה ↑
          </Link>
        </div>
      </section>
    </>
  );
}
