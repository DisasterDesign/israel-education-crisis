'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import type { KPI } from '@/data/nodes';

interface Props {
  kpis: KPI[];
  height?: number;
}

export function DataChart({ kpis, height = 260 }: Props) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const numericKpis = kpis.filter(
      (k): k is KPI & { numeric: number } => typeof k.numeric === 'number'
    );
    if (numericKpis.length === 0) return;

    const width = ref.current.clientWidth || 600;
    const margin = { top: 20, right: 20, bottom: 60, left: 50 };
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;

    const g = svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(numericKpis.map((_, i) => String(i)))
      .range([0, innerW])
      .padding(0.3);

    const maxAbs = d3.max(numericKpis, k => Math.abs(k.numeric)) || 100;
    const minVal = d3.min(numericKpis, k => k.numeric) || 0;
    const y = d3
      .scaleLinear()
      .domain([Math.min(0, minVal), maxAbs])
      .nice()
      .range([innerH, 0]);

    g.append('g')
      .attr('transform', `translate(0,${innerH})`)
      .call(
        d3
          .axisBottom(x)
          .tickFormat(i => numericKpis[+i].label.slice(0, 16))
          .tickSize(0)
      )
      .call(gg => gg.select('.domain').remove())
      .selectAll('text')
      .style('fill', 'var(--text-muted)')
      .style('font-size', '10px')
      .attr('transform', 'rotate(-18)')
      .attr('text-anchor', 'end')
      .attr('dx', '-0.5em');

    g.append('g')
      .call(d3.axisLeft(y).ticks(5))
      .call(gg => gg.select('.domain').remove())
      .call(gg =>
        gg
          .selectAll('line')
          .style('stroke', 'rgba(255,255,255,0.06)')
      )
      .selectAll('text')
      .style('fill', 'var(--text-muted)')
      .style('font-size', '10px');

    g.append('line')
      .attr('x1', 0)
      .attr('x2', innerW)
      .attr('y1', y(0))
      .attr('y2', y(0))
      .style('stroke', 'rgba(255,255,255,0.15)')
      .style('stroke-dasharray', '2,2');

    g.selectAll('rect.bar')
      .data(numericKpis)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', (_, i) => x(String(i))!)
      .attr('width', x.bandwidth())
      .attr('y', d => y(Math.max(0, d.numeric)))
      .attr('height', d => Math.abs(y(d.numeric) - y(0)))
      .attr('fill', 'var(--accent)')
      .attr('rx', 2);
  }, [kpis, height]);

  return (
    <div className="chart-container">
      <svg
        ref={ref}
        style={{ width: '100%', height: `${height}px` }}
        aria-label="גרף נתוני בעיה"
      />
    </div>
  );
}
