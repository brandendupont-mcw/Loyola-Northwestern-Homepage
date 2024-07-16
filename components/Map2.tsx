"use client";

import React from 'react';
import Map, { Marker } from 'react-map-gl';
//import ReactMapGL, { ScaleControl, NavigationControl, MapRef, }  from "react-map-gl"
import {useRef} from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';
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





  




    return (
        <div className=' '>
        <div className=' overflow-hidden'>



        < Map     
            reuseMaps
            initialViewState={INITIAL_VIEW_STATE}
            mapStyle={"mapbox://styles/branden-dupont/ckt0h6w5800vb18qq9lniiuoc"}
            mapboxAccessToken={'pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2x5b2pscW1kMGgwZjJpcHdtMDhhZjg3ZyJ9.jv_6ksQROEiuvXdl6dwoGw'}
            ref={mapRef}
            style={{width:"100%", height:800}}
    
 
            
            >
               </Map >

                <div className='flex justify-end p-6'>

                
               

                </div>
  
        
      </div>
      </div>
    );
  }

export default FirstMap