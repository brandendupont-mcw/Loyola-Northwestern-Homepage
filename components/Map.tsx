'use client'


import * as React from 'react';
import {render} from 'react-dom';
import Map, { Marker } from 'react-map-gl';
import DeckGL, {GeoJsonLayer, PolygonLayer, TripsLayer, FlyToInterpolator } from 'deck.gl';
//import ReactMapGL, { ScaleControl, NavigationControl, MapRef, }  from "react-map-gl"
import {useRef, useCallback} from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';


function FirstMap() {

    const VIEW_STATE =  {
        longitude: -105.45304562833229,
        latitude: 39.327800750504494,
        zoom: 6,
        bearing: 0,
        pitch: 40,
      }
      
    const LAT = 39.327800750504494
    const LONG = -105.45304562833229
 

  const INITIAL_VIEW_STATE  = VIEW_STATE

  const mapRef = useRef(null);

    return (
        <div className=' '>
        <div className=' overflow-hidden'>

        <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}  >
        < Map
        
            reuseMaps
            mapStyle={"mapbox://styles/branden-dupont/ckt0h6w5800vb18qq9lniiuoc"}
            mapboxAccessToken={'pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2x5Z21oZWZmMDE4eDJrbjM5N3Rlb3N0cCJ9.c2RlqXh58b3eYU_9pDq_1A'}
            ref={mapRef}
 
            
            >
                  <Marker longitude={LONG} latitude={LAT} anchor="bottom" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20"  fill="#E1004B">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                </Marker>
               </Map >

       
        

        </DeckGL>
        
      </div>
      </div>
    );
  }

export default FirstMap