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
        latitude: 41.6781,
        zoom: 7,
        bearing: 0,
      }
    


    
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
          'fill-outline-color':'#fcb515',
          'fill-color':'#fcb515',
          'line-width': 2,
          'fill-opacity': [
              'case',
              ['boolean', ['feature-state', 'hover'], false],
              0,
              0.8
          ]
      }
  }

    

    const mapRef = useRef(null);

    const handleLoad = () => {
      console.log('Map has fully loaded!');
      mapRef.current.flyTo({ center: [-87.6298, 41.8081],
        zoom: 9, 
        essential: true,
        speed: .3 // Make the flying speed faster (default is 1.2) curve:
       });
    };

    //const JurisdictionData = JSON.parse(JSON.stringify(JurisdictionJson)); 

    //const filteredJurisdictions = JurisdictionData.filter(e => e.value === SelectedJurisdiction);

    //setFilteredJurisdictionsData(filteredJurisdictions)





  




    return (
        <div className=''>
        
<section className='bg-black'>
                <div className=" 2xl:pl-32 lg:pl-10 ">
                  <div className="grid items-center grid-cols-1 gap-4 list-none lg:grid-cols-2 lg:gap-24">
                    <div>
                      <p className="text-2xl font-semibold   text-white lg:text-4xl text-balance">
                      Bringing researchers together with key community stakeholders in the city to                       
                      <span className="text-yellow"> reduce crime and violence</span> 
                      </p>
                      <p className="mt-4 text-base font-medium text-gray-100">
                      This project aims to break down
silos of work in the violence prevention and criminal justice space, democratizing data and turning
research into action by bringing together practitioners and researchers for a series of conversations
about the most pressing issues in violence prevention and criminal justice today.
                      </p>
                    </div>
                    <div className=" lg:order-second">
                    <div className=' overflow-hidden'>



< Map     
    reuseMaps
    initialViewState={INITIAL_VIEW_STATE}
    mapStyle={"mapbox://styles/branden-dupont/ckrdujoeu12kq17moqndnsnzj"}
    mapboxAccessToken={'pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2x5b2pscW1kMGgwZjJpcHdtMDhhZjg3ZyJ9.jv_6ksQROEiuvXdl6dwoGw'}
    ref={mapRef}
    style={{width:"100%", height:"60vh"}}
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


       </Map >



</div>
                    </div>
                  </div>
                </div>
              </section>
      </div>
    );
  }

export default FirstMap