"use client"

import React, { useEffect, useRef, useState } from 'react';
import { select } from 'd3-selection';
import { forceSimulation, forceManyBody, forceCenter, forceCollide, forceX } from 'd3-force';
import { scaleOrdinal } from '@visx/scale';

const width = 800;
const height = 600;
const radiusScale = d => Math.sqrt(d.value) * 2;

const colors = scaleOrdinal({
  domain: ['A', 'B', 'C'],
  range: ['#60a5fa', '#f87171', '#34d399'],
});

const data = [
  { id: 'A1', value: 30, group: 'A' },
  { id: 'A2', value: 20, group: 'A' },
  { id: 'A3', value: 10, group: 'A' },
  { id: 'B1', value: 25, group: 'B' },
  { id: 'B2', value: 15, group: 'B' },
  { id: 'C1', value: 40, group: 'C' },
  { id: 'C2', value: 30, group: 'C' },
];

export default function ForceClusterChart() {
  const [combine, setCombine] = useState(false);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current);
    svg.selectAll('*').remove();

    const simulation = forceSimulation(data)
      .force('charge', forceManyBody().strength(5))
      .force('collision', forceCollide().radius(d => radiusScale(d) + 2))
      .force('x', forceX(d => {
        if (combine) return width / 2;
        if (d.group === 'A') return width / 4;
        if (d.group === 'B') return width / 2;
        return (width * 3) / 4;
      }).strength(0.1))
      .force('center', forceCenter(width / 2, height / 2))
      .alpha(1)
      .restart();

    const node = svg
      .append('g')
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('r', d => radiusScale(d))
      .attr('fill', d => colors(d.group))
      .attr('stroke', 'white')
      .attr('stroke-width', 1.5);

    simulation.on('tick', () => {
      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
    });

    return () => simulation.stop();
  }, [combine]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => setCombine(prev => !prev)}
      >
        {combine ? 'Separate Clusters' : 'Combine Clusters'}
      </button>
      <svg ref={svgRef} width={width} height={height} />
    </div>
  );
}
