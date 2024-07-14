// @ts-nocheck
'use client'

import * as React from 'react';
import {render} from 'react-dom';
import Map, { Marker } from 'react-map-gl';
import DeckGL, {GeoJsonLayer, PolygonLayer, TripsLayer, FlyToInterpolator } from 'deck.gl';
//import ReactMapGL, { ScaleControl, NavigationControl, MapRef, }  from "react-map-gl"
import {useRef, useCallback, useState, useEffect} from 'react';
import type {Feature, Geometry} from 'geojson';
import type {PickingInfo} from '@deck.gl/core';
import {MjolnirEvent} from 'mjolnir.js';
import 'mapbox-gl/dist/mapbox-gl.css';
import {scaleThreshold, scaleOrdinal} from 'd3-scale';
//import JurisdictionJson from "../viz/data.json"



function FirstMap() {

    const VIEW_STATE =  {
        longitude: -105.45304562833229,
        latitude: 39.327800750504494,
        zoom: 6,
        bearing: 0,
        pitch: 20,
      }
      

    
    const LAT = 39.327800750504494
    const LONG = -105.45304562833229

    
    const INITIAL_VIEW_STATE  = VIEW_STATE



    const mapRef = useRef(null);

    //const JurisdictionData = JSON.parse(JSON.stringify(JurisdictionJson)); 

    //const filteredJurisdictions = JurisdictionData.filter(e => e.value === SelectedJurisdiction);

    //setFilteredJurisdictionsData(filteredJurisdictions)


    const layer2 = new GeoJsonLayer({
      id: 'Judicial Districts',
      data: 'https://raw.githubusercontent.com/brandendupont-mcw/Colorado-Data-Prosecution-Homepage/main/viz/judicial2.geojson',
      filled: true,
      getLineColor: [255,251,241],
      getFillColor: [64,18,139],
      //getFillColor: f => COLOR_SCALE(f.properties.jdist_id),
      opacity: 0.2,
      autoHighlight: true,
      getLineWidth: 10,
      lineWidthMinPixels: 1,
      pickable: true,
      getText: d => d.properties,
      getTextSize: 24,

      
    }, 
  
  );

  




    return (
        <div className=' '>
        <div className=' overflow-hidden'>

        <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}  layers={[layer2]} 
        getTooltip={({object}) => object && `District: ${object.properties.jdist_id}`}
        //</div>getTooltip={({object}: PickingInfo) => object && `${object.jdist_id}\nPopulation: ${object.jdist_id}`}
        //getCursor={() => 'url(images/custom.png), auto'}
        
        >
        < Map     
            reuseMaps
            mapStyle={"mapbox://styles/branden-dupont/ckt0h6w5800vb18qq9lniiuoc"}
            mapboxAccessToken={'pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2x5Z21oZWZmMDE4eDJrbjM5N3Rlb3N0cCJ9.c2RlqXh58b3eYU_9pDq_1A'}
            ref={mapRef}
 
            
            >
               </Map >

                <div className='flex justify-end p-6'>

                
               

                </div>
        </DeckGL>
        
      </div>
      </div>
    );
  }

export default FirstMap