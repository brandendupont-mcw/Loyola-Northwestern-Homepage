// @ts-nocheck
"use client";

import React from 'react';
import Map, {Source, Layer} from 'react-map-gl';
//import ReactMapGL, { ScaleControl, NavigationControl, MapRef, }  from "react-map-gl"
import {useRef} from 'react';
import {useState, useEffect, useMemo, useCallback} from 'react';
//import type FillLayerSpecification from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import JurisdictionJson from "../viz/data.json"



function FirstMap() {

    const VIEW_STATE =  {
        longitude: -87.6298,
        latitude: 41.8781,
        zoom: 8,
        bearing: 0,
        pitch: 20,
      }
    

    
    const LAT = 39.327800750504494
    const LONG = -105.45304562833229

    
    const INITIAL_VIEW_STATE  = VIEW_STATE

    const [year, setYear] = useState(2015);
    const [allData, setAllData] = useState(null);

    useEffect(() => {
      /* global fetch */
      fetch(
        'https://data.cityofchicago.org/resource/qqq8-j68g.geojson'
      )
        .then(resp => resp.json())
        .then(json => setAllData(json))
        .catch(err => console.error('Could not load data', err)); // eslint-disable-line
    }, []);

    const states = ['New York', 'Pennsylvania'];
    const colors = ['#F0F', '#FF0'];
    const statesAndColors = [1, '#F0F', 2, '#FF0'];



    const dataLayer = {
      id: 'state-fills',
      type: 'fill',
      source: 'states',
      layout: {},
      paint: {
          'fill-color': '#20c997',
          'fill-opacity': [
              'case',
              ['boolean', ['feature-state', 'hover'], false],
              1,
              0.5
          ]
      }
  }

    

    const mapRef = useRef(null);

    const handleLoad = () => {
      console.log('Map has fully loaded!');
      mapRef.current.flyTo({ center: [-87.6298, 41.8781],
        zoom: 10, 
        essential: true,
        speed: .5, // Make the flying speed faster (default is 1.2) curve:
       });
    };

    //const JurisdictionData = JSON.parse(JSON.stringify(JurisdictionJson)); 

    //const filteredJurisdictions = JurisdictionData.filter(e => e.value === SelectedJurisdiction);

    //setFilteredJurisdictionsData(filteredJurisdictions)





  




    return (
        <div className=' '>
        <div className=' overflow-hidden'>



        < Map     
            reuseMaps
            initialViewState={INITIAL_VIEW_STATE}
            mapStyle={"mapbox://styles/branden-dupont/ckrdujoeu12kq17moqndnsnzj"}
            mapboxAccessToken={'pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2x5b2pscW1kMGgwZjJpcHdtMDhhZjg3ZyJ9.jv_6ksQROEiuvXdl6dwoGw'}
            ref={mapRef}
            style={{width:"100%", height:800}}
            onLoad={handleLoad}
            scrollZoom={false}
            boxZoom={false}
            dragRotate={false}
            dragPan={false}
            touchZoomRotate={false}
            scrollZoom={false}  
 
            
            >
                                    <Source type="geojson" data={allData}>
          <Layer {...dataLayer} />
        </Source>

<section className="relative flex items-right justify-center overflow-hidden  ">
                <div className=" px-5 py-12 mx-auto max-w-7xl lg:px-16 lg:py-16 md:px-12 ">
                  <div className="">
                    <div className="max-w-3xl  bg-primary-500 ">
       
                      <p className="mt-6 text-4xl font-bold tracking-tight text-ywhite md:text-4xl">
                      Bringing researchers together with key community
                      stakeholders in the city reduce crime and violence<span className="text-white"></span> 
                        <span className="md:block"> </span>
                      </p>
                      <p className="max-w-2xl mt-4 text-base text-ywhite">
                      This project aims to break down
silos of work in the violence prevention and criminal justice space, democratizing data and turning
research into action by bringing together practitioners and researchers for a series of conversations
about the most pressing issues in violence prevention and criminal justice today



                      </p>
                    </div>
                  </div>
                </div>
              </section>
               </Map >

                <div className='flex justify-end p-6'>

                
               

                </div>
  
        
      </div>
      </div>
    );
  }

export default FirstMap