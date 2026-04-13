'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { NetworkGraph2D } from './NetworkGraph2D';
import { GraphControls } from './GraphControls';

const NetworkGraph3D = dynamic(() => import('./NetworkGraph3D'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full text-text-muted text-sm">
      טוען גרף תלת-מימדי…
    </div>
  )
});

export function GraphWrapper() {
  const [mode, setMode] = useState<'2d' | '3d'>('2d');
  const [canUse3D, setCanUse3D] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    setCanUse3D(isDesktop);
    if (isDesktop) setMode('3d');
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full">
      <GraphControls mode={mode} onModeChange={setMode} canUse3D={canUse3D} />
      {mode === '3d' && canUse3D ? <NetworkGraph3D /> : <NetworkGraph2D />}
    </div>
  );
}
