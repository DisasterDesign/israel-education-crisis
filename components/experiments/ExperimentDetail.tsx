'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { TAG_LABELS, type Experiment } from '@/data/experiments';
import { SourceBadge } from '@/components/node/SourceBadge';

interface Props {
  experiment: Experiment | null;
  onClose: () => void;
}

function KPIRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline gap-4 py-1">
      <span className="text-xs text-text-muted">{label}</span>
      <span className="font-mono text-sm ltr">{value}</span>
    </div>
  );
}

function Section({
  title,
  text,
  kpis
}: {
  title: string;
  text: string;
  kpis?: { label: string; value: string }[];
}) {
  return (
    <section className="space-y-3">
      <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-text-primary">{text}</p>
      {kpis && kpis.length > 0 && (
        <div className="bg-bg-primary/40 rounded p-3 space-y-0.5 border border-white/5">
          {kpis.map((k, i) => (
            <KPIRow key={i} label={k.label} value={k.value} />
          ))}
        </div>
      )}
    </section>
  );
}

export function ExperimentDetail({ experiment, onClose }: Props) {
  useEffect(() => {
    if (!experiment) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [experiment, onClose]);

  return (
    <AnimatePresence>
      {experiment && (
        <motion.div
          className="fixed inset-0 z-50 bg-bg-primary/80 backdrop-blur-sm overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="min-h-full flex items-start justify-center p-4 sm:p-8"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
          >
            <div
              className="card rounded-2xl border border-white/10 max-w-2xl w-full p-6 sm:p-10 space-y-8 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <header className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">
                    {experiment.location} · {experiment.year}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black leading-tight">
                    {experiment.title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-text-muted hover:text-accent text-2xl leading-none"
                  aria-label="סגור"
                >
                  ×
                </button>
              </header>

              <Section
                title="הבעיה"
                text={experiment.problem}
                kpis={experiment.problemKPIs}
              />
              <Section title="מה עשו" text={experiment.action} />
              <Section
                title="מה קרה"
                text={experiment.result}
                kpis={experiment.resultKPIs}
              />
              <Section title="המחיר" text={experiment.cost} kpis={experiment.costKPIs} />

              <section className="space-y-3 border-t border-white/5 pt-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted">
                  ההקשר — למה קשה להעתיק
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary italic">
                  {experiment.context}
                </p>
              </section>

              <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-5">
                {experiment.tags.map(t => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-bg-elevated text-text-muted"
                  >
                    {TAG_LABELS[t]}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 border-t border-white/5 pt-5">
                {experiment.sources.map(s => (
                  <SourceBadge key={s} source={s} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
