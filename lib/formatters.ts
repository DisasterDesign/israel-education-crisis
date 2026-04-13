export function formatNumber(n: number, digits = 0): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  }).format(n);
}

export function formatPercent(n: number, digits = 0): string {
  return `${formatNumber(n, digits)}%`;
}

export function formatCompact(n: number): string {
  if (Math.abs(n) >= 1_000_000)
    return `${formatNumber(n / 1_000_000, 1)}M`;
  if (Math.abs(n) >= 1_000) return `${formatNumber(n / 1_000, 1)}K`;
  return formatNumber(n);
}

export function formatILS(n: number): string {
  return `₪${formatCompact(n)}`;
}
