'use client';

import { useState } from 'react';
import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: 'top' | 'bottom';
}

export function Tooltip({ children, content, side = 'top' }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      {open && (
        <span
          className={clsx(
            'absolute z-50 whitespace-nowrap px-2 py-1 text-xs rounded bg-bg-elevated border border-white/10 text-text-primary shadow-lg',
            side === 'top' ? 'bottom-full mb-2' : 'top-full mt-2',
            'right-1/2 translate-x-1/2'
          )}
        >
          {content}
        </span>
      )}
    </span>
  );
}
