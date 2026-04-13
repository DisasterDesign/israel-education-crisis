'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const NAV = [
  { href: '/', label: 'מפה' },
  { href: '/simulate', label: 'משוך חוט' },
  { href: '/experiments', label: 'ניסויים' },
  { href: '/research', label: 'מחקרים' },
  { href: '/about', label: 'אודות' }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-bg-primary/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="text-xl font-black tracking-tight group-hover:text-accent transition-colors">
            רשת
          </span>
          <span className="text-xs text-text-muted hidden sm:inline">
            מפת משבר החינוך
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV.map(item => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'px-3 py-1.5 text-sm rounded transition-colors',
                  isActive
                    ? 'text-text-primary bg-bg-elevated'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
