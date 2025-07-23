"use client"
import React, { useState, useEffect, useRef } from 'react';
import { AreaClosed, LinePath } from '@visx/shape';
import { scaleTime, scaleLinear } from '@visx/scale';
import { extent, max } from 'd3-array';
import appleStock from '@visx/mock-data/lib/mocks/appleStock';
import { Annotation, Connector, Label, CircleSubject } from '@visx/annotation';

function StickyScrollChart() {
  const [currentBox, setCurrentBox] = useState(1);

  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === box1Ref.current) setCurrentBox(1);
            if (entry.target === box2Ref.current) setCurrentBox(2);
            if (entry.target === box3Ref.current) setCurrentBox(3);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (box1Ref.current) observer.observe(box1Ref.current);
    if (box2Ref.current) observer.observe(box2Ref.current);
    if (box3Ref.current) observer.observe(box3Ref.current);
    return () => observer.disconnect();
  }, []);

  const data = appleStock.map(d => ({
    date: new Date(d.date),
    value: d.close
  }));

  const comparisonData = data.map(d => ({
    date: d.date,
    value: d.value * 0.8 + 20
  }));

  const width = 800;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 40, left: 60 };

  const xDomain = extent(data, d => d.date);
  const yMax = max([...data, ...comparisonData], d => d.value) || 0;
  const xScale = scaleTime({
    domain: xDomain,
    range: [margin.left, width - margin.right]
  });
  const yScale = scaleLinear({
    domain: [0, yMax],
    range: [height - margin.bottom, margin.top]
  });

  const annotationDate = data[30].date;
  const annotationValue = data[30].value;
  const annotationX = xScale(annotationDate);
  const annotationY = yScale(annotationValue);

  return (
    <div className="relative">
      <div className="sticky top-0 h-screen z-0 pointer-events-none flex items-center justify-center">
        <svg width={width} height={height}>
          <AreaClosed
            data={data}
            x={d => xScale(d.date)}
            y={d => yScale(d.value)}
            yScale={yScale}
            fill="#4fd1c5"
            opacity={0.3}
            stroke="#319795"
            strokeWidth={2}
          />
          <LinePath
            data={data}
            x={d => xScale(d.date)}
            y={d => yScale(d.value)}
            stroke="#319795"
            strokeWidth={3}
          />
          <LinePath
            data={comparisonData}
            x={d => xScale(d.date)}
            y={d => yScale(d.value)}
            stroke="#a855f7"
            strokeWidth={2}
            strokeDasharray="6,3"
          />

          {/* Annotation */}
          <Annotation x={annotationX} y={annotationY} dx={210} dy={-170}>
            <Connector />
            <CircleSubject radius={5} />
            <Label
              title="Notable Increase"
              subtitle={`Apple close: $${annotationValue.toFixed(2)}`}
              showAnchorLine
            />
          </Annotation>

          {/* Dynamic section labels */}
          <g className={`transition-opacity duration-500 ${currentBox === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <text x={width / 2} y={margin.top} textAnchor="middle" className="font-bold text-xl" fill="#1f2937">
              Section 1 Title
            </text>
            <text x={width / 2} y={margin.top + 24} textAnchor="middle" fill="#374151">
              This annotation explains section 1.
            </text>
          </g>
          <g className={`transition-opacity duration-500 ${currentBox === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <text x={width / 2} y={margin.top} textAnchor="middle" className="font-bold text-xl" fill="#1f2937">
              Section 2 Title
            </text>
            <text x={width / 2} y={margin.top + 24} textAnchor="middle" fill="#374151">
              This annotation explains section 2.
            </text>
          </g>
          <g className={`transition-opacity duration-500 ${currentBox === 3 ? 'opacity-100' : 'opacity-0'}`}>
            <text x={width / 2} y={margin.top} textAnchor="middle" className="font-bold text-xl" fill="#1f2937">
              Section 3 Title
            </text>
            <text x={width / 2} y={margin.top + 24} textAnchor="middle" fill="#374151">
              This annotation explains section 3.
            </text>
          </g>
        </svg>
      </div>

      <div className="relative z-10">
        <section ref={box1Ref} className="min-h-screen flex items-center">
          <div className="mx-auto p-8 bg-white bg-opacity-75 rounded">
            <h2 className="text-2xl font-bold mb-4">Scroll Box 1</h2>
            <p>
              Content for the first scroll section. When this box is in view, the chart's title and annotation update to Section 1.
            </p>
          </div>
        </section>
        <section ref={box2Ref} className="min-h-screen flex items-center">
          <div className="mx-auto p-8 bg-white bg-opacity-75 rounded">
            <h2 className="text-2xl font-bold mb-4">Scroll Box 2</h2>
            <p>
              Content for the second scroll section. When this box is in view, the chart's title and annotation update to Section 2.
            </p>
          </div>
        </section>
        <section ref={box3Ref} className="min-h-screen flex items-center">
          <div className="mx-auto p-8 bg-white bg-opacity-75 rounded">
            <h2 className="text-2xl font-bold mb-4">Scroll Box 3</h2>
            <p>
              Content for the third scroll section. When this box is in view, the chart's title and annotation update to Section 3.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StickyScrollChart;
