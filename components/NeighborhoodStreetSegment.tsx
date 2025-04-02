// @ts-nocheck
"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import DeckGL from '@deck.gl/react';
import { LineLayer, GeoJsonLayer } from '@deck.gl/layers';
import { Map } from 'react-map-gl';
import { WebMercatorViewport } from '@deck.gl/core';
import { bbox } from "@turf/bbox";
import { scaleLinear } from 'd3-scale';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2lmeWZqcXVhNTJwdHUzbTJwbGx2NjljNSJ9.fbeofSfEbOnewOSrZ-wMqA'; // Replace this!

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




const MapWithDeck = () => {

    const DATA_URL =
    'https://raw.githubusercontent.com/brandendupont-mcw/Loyola-Northwestern-Homepage/refs/heads/main/public/violent_arrest.geojson';

    const INITIAL_VIEW_STATE = {
        longitude: -87.6298,
        latitude: 41.8781,
        zoom: 10,
        pitch: 0,
        bearing: 0,
      };

    const [geoData, setGeoData] = useState(null);
    const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

    useEffect(() => {
        fetch(DATA_URL)
          .then(res => res.json())
          .then(data => {

            const bounds = bbox(data); // [minX, minY, maxX, maxY]

            const viewport = new WebMercatorViewport({
              width: window.innerWidth,
              height: window.innerHeight,
            });

      
            const { longitude, latitude, zoom } = viewport.fitBounds(
              [
                [bounds[0], bounds[1]],
                [bounds[2], bounds[3]],
              ],
              { padding: 40 }
            );
    
            setGeoData(data);
            setViewState({ longitude, latitude, zoom: Math.max(zoom - 1, 2), bearing: 0, pitch: 0 });
          });
      }, []);

      
    const colorScale = scaleLinear()
    .domain([0,1,3]) // Adjust based on your data range
    .range([[240, 240, 240], [166, 206, 227], [31, 120, 180], [8, 48, 107]]); // light blue → red


    const layers = [
        new GeoJsonLayer({
            id: 'gun-possession-line',
            data: geoData,
            stroked: true,
            filled: false,
            getLineColor: f => colorScale(f.properties?.violent_gun_arrest || 0),
            lineWidthScale: 2,
            lineWidthMinPixels: 2,
            getLineWidth: 2,
            pickable: true,
        }),
      ];

    return(

    <>
    <DeckGL
      viewState={viewState}
      onViewStateChange={({ viewState }) => setViewState(viewState)}
      controller={true}
      layers={layers}
      getTooltip={({ object }) =>
        object ? { text: object.label, style: { fontSize: '14px' } } : null
      }
      style={{ width: '100%', height: '100%' }}
    >
      <Map
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v10"
        reuseMaps
      />
    </DeckGL>
    <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 shadow rounded p-3 text-sm z-10 w-56">
  <h4 className="font-semibold mb-2">Violent Possession Arrests</h4>
  <ul className="space-y-1">
    <li className="flex items-center gap-2">
      <span className="w-4 h-3 inline-block rounded-sm bg-gray-300"></span>
      None
    </li>
    <li className="flex items-center gap-2">
      <span className="w-4 h-3 inline-block rounded-sm bg-blue-200"></span>
      1
    </li>
    <li className="flex items-center gap-2">
      <span className="w-4 h-3 inline-block rounded-sm bg-blue-500"></span>
      2–3
    </li>
    <li className="flex items-center gap-2">
      <span className="w-4 h-3 inline-block rounded-sm bg-blue-900"></span>
      4+
    </li>
  </ul>
</div>
    </>
    )
};
const MapWithDeck2 = () => {

    const NEW_DATA_URL =
    'https://raw.githubusercontent.com/brandendupont-mcw/Loyola-Northwestern-Homepage/refs/heads/main/public/gun_possession_arrest.geojson';

    const INITIAL_VIEW_STATE = {
        longitude: -87.6298,
        latitude: 41.8781,
        zoom: 10,
        pitch: 0,
        bearing: 0,
      };

    const [geoData2, setGeoData2] = useState(null);
    const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

    useEffect(() => {
        fetch(NEW_DATA_URL)
          .then(res => res.json())
          .then(data => {

            setGeoData2(data);

            const bounds = bbox(data); // [minX, minY, maxX, maxY]

            const viewport = new WebMercatorViewport({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          
      
            const { longitude, latitude, zoom } = viewport.fitBounds(
              [
                [bounds[0], bounds[1]],
                [bounds[2], bounds[3]],
              ],
              { padding: 10 }
            );
    
            
            setViewState({ longitude, latitude, zoom: Math.max(zoom - 1, 2), bearing: 0, pitch: 0 });

            //console.log(data.features[0].properties); 
          });
      }, []);

      const colorScale = scaleLinear()
      .domain([0,1,3]) // Adjust based on your data range
      .range([	[240, 240, 240], [166, 206, 227], [31, 120, 180], [8, 48, 107]]);

    const layers = [
        new GeoJsonLayer({
            id: 'gun-possession-line',
            data: geoData2,
            getLineColor: f => {
                const count = f.properties?.gun_possession_arrest || 0;
                const color = colorScale(count);
                console.log(count, color); // 👀 see if it's working
                return color;
              },
            stroked: true,
            filled: false,
            lineWidthScale: 2,
            lineWidthMinPixels: 2,
            getLineWidth: 2,
            pickable: true,
        }),
      ];

    return(
    <>
    <DeckGL
      viewState={viewState}
      onViewStateChange={({ viewState }) => setViewState(viewState)}
      controller={true}
      layers={layers}
      getTooltip={({ object }) =>
        object ? { text: object.label, style: { fontSize: '14px' } } : null
      }
      style={{ width: '100%', height: '100%' }}
    >
      <Map
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v10" 
        reuseMaps
      />
    </DeckGL>
    <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 shadow rounded p-3 text-sm z-10 w-56">
  <h4 className="font-semibold mb-2">Gun Possession Arrests</h4>
  <ul className="space-y-1">
    <li className="flex items-center gap-2">
      <span className="w-4 h-3 inline-block rounded-sm bg-gray-300"></span>
      None
    </li>
    <li className="flex items-center gap-2">
      <span className="w-4 h-3 inline-block rounded-sm bg-blue-200"></span>
      1
    </li>
    <li className="flex items-center gap-2">
      <span className="w-4 h-3 inline-block rounded-sm bg-blue-500"></span>
      2–3
    </li>
    <li className="flex items-center gap-2">
      <span className="w-4 h-3 inline-block rounded-sm bg-blue-900"></span>
      4+
    </li>
  </ul>
</div>

    </>
    )
};

export default function App() {
  return (
    <div className='bg-ywhite '>
                        <div className='p-10'>
                        <div className="p-4 ml-10  ">
                    <div className="text-3xl font-semibold  max-w-xl mt-4" >
                       Crime and Arrests in        <span className=" text-3xl font-mono  border-black border-b-4 ">Austin, Chicago </span>
                    </div>
                    
                    <div className="mt-6 text-lg max-w-xl">
                    In Chicago's most violent neighborhoods, the Chicago police department makes more gun possession arrests than arrests for violent crime. Select Chicago neighborhoods to view more.
                    </div>
                    </div>



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
