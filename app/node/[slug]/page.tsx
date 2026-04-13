import { notFound } from 'next/navigation';
import Link from 'next/link';
import { NODES, getNodeBySlug, CATEGORY_LABELS } from '@/data/nodes';
import { NODE_INSIGHTS } from '@/data/node-insights';
import { SOURCES } from '@/data/sources';
import { KPICard } from '@/components/node/KPICard';
import { ConnectionList } from '@/components/node/ConnectionList';
import { DataChart } from '@/components/node/DataChart';
import { SourceBadge } from '@/components/node/SourceBadge';

export function generateStaticParams() {
  return NODES.map(n => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const node = getNodeBySlug(params.slug);
  if (!node) return { title: 'צומת לא קיים' };
  return {
    title: `${node.title} · רשת`,
    description: node.subtitle
  };
}

export default function NodePage({ params }: { params: { slug: string } }) {
  const node = getNodeBySlug(params.slug);
  if (!node) notFound();

  const insight = NODE_INSIGHTS[node.id];
  const insightSource = insight ? SOURCES[insight.source] : null;

  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      <nav
        aria-label="breadcrumb"
        className="flex items-center flex-wrap gap-2 text-xs text-text-muted mb-6"
      >
        <Link href="/" className="hover:text-accent transition-colors">
          מפה
        </Link>
        <span className="text-white/20">/</span>
        <span className="inline-flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: `var(--color-${node.category})` }}
          />
          {CATEGORY_LABELS[node.category]}
        </span>
        <span className="text-white/20">/</span>
        <span className="text-text-secondary">{node.title}</span>
      </nav>

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-accent mb-10 transition-colors"
      >
        <span>←</span>
        חזרה למפה
      </Link>

      <header className="mb-12 max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: `var(--color-${node.category})` }}
          />
          <span className="text-xs font-mono uppercase tracking-widest text-text-muted">
            {CATEGORY_LABELS[node.category]} · חומרה {node.severity}/10
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
          {node.title}
        </h1>
        <p className="mt-4 text-xl text-text-secondary leading-relaxed">
          {node.subtitle}
        </p>
        <p className="mt-6 text-base text-text-muted leading-relaxed max-w-prose">
          {node.description}
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-5">
          מספרים מרכזיים
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {node.kpis.map((kpi, i) => (
            <KPICard key={i} kpi={kpi} />
          ))}
        </div>
      </section>

      {insight && insightSource && (
        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-5">
            התובנה המרכזית במחקר
          </h2>
          <blockquote className="card rounded-lg p-6 sm:p-8 border-r-2 border-accent">
            <p className="text-lg sm:text-xl leading-relaxed text-text-primary font-medium">
              {insight.quote}
            </p>
            <footer className="mt-5 text-xs text-text-muted">
              מתוך{' '}
              {insightSource.file ? (
                <a
                  href={insightSource.file}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  {insightSource.label}
                </a>
              ) : (
                <span className="text-text-secondary">{insightSource.label}</span>
              )}
              {' · '}
              <span data-number>{insightSource.year}</span>
            </footer>
          </blockquote>
        </section>
      )}

      <section className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-5">
          הנתונים
        </h2>
        <div className="card rounded-lg p-6">
          <DataChart kpis={node.kpis} />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-5">
          הקשרים
        </h2>
        <ConnectionList nodeId={node.id} />
      </section>

      <aside className="border-t border-white/5 pt-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">
          מקורות
        </h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {Array.from(new Set(node.kpis.map(k => k.source))).map(s => (
            <SourceBadge key={s} source={s} />
          ))}
        </div>
      </aside>
    </article>
  );
}
