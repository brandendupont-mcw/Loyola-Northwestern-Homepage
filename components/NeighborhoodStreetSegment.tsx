// @ts-nocheck
"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import DeckGL from '@deck.gl/react';
import { LineLayer, GeoJsonLayer } from '@deck.gl/layers';
import { Map } from 'react-map-gl';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2x5b2pscW1kMGgwZjJpcHdtMDhhZjg3ZyJ9.jv_6ksQROEiuvXdl6dwoGw'; // Replace this!

const INITIAL_VIEW_STATE = {
  longitude: -87.6298,
  latitude: 41.8781,
  zoom: 10,
  pitch: 0,
  bearing: 0,
};

const data = [
  {
    sourcePosition: [-87.6298, 41.8781],
    targetPosition: [-87.6, 41.85],
    color: [255, 0, 0],
    label: 'Route A',
  },
  {
    sourcePosition: [-87.65, 41.89],
    targetPosition: [-87.61, 41.87],
    color: [0, 0, 255],
    label: 'Route B',
  },
];

const layers = [
  new LineLayer({
    id: 'line-layer',
    data,
    getSourcePosition: d => d.sourcePosition,
    getTargetPosition: d => d.targetPosition,
    getColor: d => d.color,
    getWidth: 3,
    pickable: true,
  }),
];




const MapWithDeck = () => (
  <DeckGL
    initialViewState={INITIAL_VIEW_STATE}
    controller={true}
    layers={layers}
    getTooltip={({ object }) =>
      object ? { text: object.label, style: { fontSize: '14px' } } : null
    }
    style={{ width: '100%', height: '100%' }}
  >
    <Map
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/branden-dupont/ckrdujoeu12kq17moqndnsnzj"
      reuseMaps
    />
  </DeckGL>
);

const MapWithDeck2 = () => {

    const DATA_URL =
    'https://raw.githubusercontent.com/brandendupont-mcw/Loyola-Northwestern-Homepage/refs/heads/main/public/static/data/gun_possession_arrest.geojson';

    const [geoData, setGeoData] = useState(null);

    useEffect(() => {
      fetch(DATA_URL)
        .then(res => res.json())
        .then(data => setGeoData(data));
        console.log('Loaded GeoJSON:', data); // 👈 DEBUG
    }, []);

    const layers2 = [
        new GeoJsonLayer({
            id: 'gun-possession-line',
            data: geoData,
            stroked: true,
            filled: false,
            lineWidthScale: 2,
            lineWidthMinPixels: 2,
            getLineColor: [0, 122, 255],
            getLineWidth: 2,
            pickable: true,
        }),
      ];

    return(

    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers2}
      getTooltip={({ object }) =>
        object ? { text: object.label, style: { fontSize: '14px' } } : null
      }
      style={{ width: '100%', height: '100%' }}
    >
      <Map
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/branden-dupont/ckrdujoeu12kq17moqndnsnzj"
        reuseMaps
      />
    </DeckGL>
    )
};

export default function App() {
  return (
    <div className='bg-ywhite '>
        <div  className='mx-auto max-w-[1400px] mb-10 p-4'>
        <span className=" text-3xl font-mono  border-black border-b-4 ">Austin, Chicago </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  mx-auto max-w-[1400px] ">
            <div className='pl-4'>Violent Arrests by Street Segment</div>
            <div className='pl-10'>Gun Arrests by Street Segment</div>
            
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-4 h-screen mx-auto max-w-[1400px] ">
      <div className=" h-[500px] rounded overflow-hidden shadow relative">
        <MapWithDeck />
      </div>
      <div className=" h-[500px] rounded overflow-hidden shadow relative">
        <MapWithDeck2 />
      </div>
    </div>
    </div>
  );
}
