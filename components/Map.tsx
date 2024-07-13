'use client'


import * as React from 'react';
import {render} from 'react-dom';
import Map, { Marker } from 'react-map-gl';
import DeckGL, {GeoJsonLayer, PolygonLayer, TripsLayer, FlyToInterpolator } from 'deck.gl';
//import ReactMapGL, { ScaleControl, NavigationControl, MapRef, }  from "react-map-gl"
import {useRef, useCallback, useState} from 'react';
import type {Feature, Geometry} from 'geojson';
import type {PickingInfo} from '@deck.gl/core';
import {MjolnirEvent} from 'mjolnir.js';
import 'mapbox-gl/dist/mapbox-gl.css';



function FirstMap() {

    const VIEW_STATE =  {
        longitude: -105.45304562833229,
        latitude: 39.327800750504494,
        zoom: 6,
        bearing: 0,
        pitch: 0,
      }
      
    type DataType = {
      position: [longitude: number, latitude: number];
      message: string;
    };
    
    const LAT = 39.327800750504494
    const LONG = -105.45304562833229

    
    const INITIAL_VIEW_STATE  = VIEW_STATE

    const [SelectedJurisdiction, SetSelectedJurisdiction] = useState(false);
    const [hoverInfo, setHoverInfo] = useState<PickingInfo<DataType>>();

    const mapRef = useRef(null);


    const layer1 = new PolygonLayer({
      id: 'PolygonLayer',
      data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-zipcodes.json',
    
      getPolygon: d => d.contour,
      getElevation: d => d.population / d.area / 10,
      getFillColor: d => [d.population / d.area / 10,10,20],
      getLineColor: [255, 255, 255],
      getLineWidth: 200,
      lineWidthMinPixels: 1,
      pickable: true
    });

    const layer2 = new GeoJsonLayer({
      id: 'Judicial Districts',
      data: 'https://raw.githubusercontent.com/brandendupont-mcw/Colorado-Data-Prosecution-Homepage/main/viz/judicial.geojson',
      filled: true,
      getLineColor: [255,251,241],
      getFillColor: [64,18,139],
      opacity: 0.7,
      autoHighlight: true,
      getTextBackgroundColor:	[255, 255, 255, 255],
      getLineWidth: 10,
      lineWidthMinPixels: 1,
      pickable: true,
      getText: d => `${d.object.properties.jdist_id}`,
      getLabel:  d => `${d.object.properties.jdist_id}`,
      getPointRadius: 4,
      getTextSize: 12,
      onHover: info => setHoverInfo(info)
    }, 
  
  );

  const onHover = useCallback((info: PickingInfo, event: MjolnirEvent) => {
  }, []);
  // Callback when the pointer clicks on an object in any pickable layer
  const onClick = useCallback((info: PickingInfo, event: MjolnirEvent) => {
    console.log('Clicked:', info, event, info.object.properties.jdist_id  ); SetSelectedJurisdiction( info);
  }, []);
  
  const hoverInfoValue = hoverInfo?.object?.properties.jdist_id

    return (
        <div className=' '>
        <div className=' overflow-hidden'>

        <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}  layers={[layer1, layer2]} 
        getTooltip={({object}) => object && `District: ${object.properties.jdist_id}`}
        //</div>getTooltip={({object}: PickingInfo) => object && `${object.jdist_id}\nPopulation: ${object.jdist_id}`}
        //getCursor={() => 'url(images/custom.png), auto'}
        
        onClick={onClick}
        >
        < Map     
            reuseMaps
            mapStyle={"mapbox://styles/branden-dupont/ckt0h6w5800vb18qq9lniiuoc"}
            mapboxAccessToken={'pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2x5Z21oZWZmMDE4eDJrbjM5N3Rlb3N0cCJ9.c2RlqXh58b3eYU_9pDq_1A'}
            ref={mapRef}
 
            
            >
               </Map >

       
               <div className='bg-white text-black h-48 w-48 font-4xl '>
                  {SelectedJurisdiction && SelectedJurisdiction.object.properties.jdist_id } ----
                  {hoverInfoValue || 'Loading...' }
                </div>

        </DeckGL>
        
      </div>
      </div>
    );
  }

export default FirstMap