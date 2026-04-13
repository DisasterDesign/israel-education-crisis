'use client';

import { NetworkGraph2D } from './NetworkGraph2D';
import { GraphControls } from './GraphControls';

export function GraphWrapper() {
  return (
    <div className="relative w-full h-full">
      <GraphControls />
      <NetworkGraph2D />
    </div>
  );
}
