// @ts-nocheck
"use client";



import React from 'react';
import Map, { Marker } from 'react-map-gl';
import DeckGL, {GeoJsonLayer, PolygonLayer, TripsLayer, FlyToInterpolator } from 'deck.gl';
//import ReactMapGL, { ScaleControl, NavigationControl, MapRef, }  from "react-map-gl"
import {useRef, useCallback, useState, useEffect} from 'react';
import type {Feature, Geometry} from 'geojson';
import type {PickingInfo} from '@deck.gl/core';
import {MjolnirEvent} from 'mjolnir.js';
import 'mapbox-gl/dist/mapbox-gl.css';
import {scaleThreshold, scaleOrdinal} from 'd3-scale';
import JurisdictionJson from "../viz/data.json"
import { ErrorBoundary } from "react-error-boundary";



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

    const [SelectedJurisdiction, SetSelectedJurisdiction] = useState(false);
    const [hoverInfo, setHoverInfo] = useState();
    const [filteredJurisdictionsData, setFilteredJurisdictionsData] = useState(false);
    const [allData, setAllData] = useState(null);

    useEffect(() => {
      /* global fetch */
      fetch(
        'https://raw.githubusercontent.com/brandendupont-mcw/Colorado-Data-Prosecution-Homepage/main/viz/judicial2.geojson'
      )
        .then(resp => resp.json())
        .then(json => setAllData(json))
        .catch(err => console.error('Could not load data', err)); // eslint-disable-line
    }, []);


    const mapRef = useRef(null);

    const JurisdictionData = JSON.parse(JSON.stringify(JurisdictionJson)); 

    //const filteredJurisdictions = JurisdictionData.filter(e => e.value === SelectedJurisdiction);

    //setFilteredJurisdictionsData(filteredJurisdictions)

    const COLOR_SCALE = scaleOrdinal()
            .domain([ 4, 14, 15,16, 1, 2, 5,
              6,
              7,
              8,
              9,
              11,
              12,
              17,
              18,
              19,
              20,
              21,
              22,
              3,
              10,
              13,
              ])
            .range([[255,231 ,155],
              [255,231 ,155],
              [255,231 ,155],
              [255,231 ,155],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
              [64,18,139],
            ]);


    const layer2 = new GeoJsonLayer({
      id: 'Judicial Districts',
      data: allData,
      filled: true,
      getLineColor: [255,251,241],
      //getFillColor: [64,18,139],
      getFillColor: f => COLOR_SCALE(f.properties.jdist_id),
      opacity: 0.2,
      autoHighlight: true,
      getLineWidth: 10,
      lineWidthMinPixels: 1,
      pickable: true,
      getText: d => d.properties,
      getTextSize: 24,
      onHover: info => setHoverInfo(info), 
      onClick: info => SetSelectedJurisdiction(info)
      
    }, 
  
  );

  
  const SelectedJurisdictionValue = SelectedJurisdiction?.object?.properties.jdist_id

  const filteredJurisdictionData = JurisdictionData.filter(e => e.value === SelectedJurisdictionValue)
  console.log(filteredJurisdictionData)

  




    return (


        <div className=' '>
        <div className=' overflow-hidden'>

        <DeckGL          initialViewState={INITIAL_VIEW_STATE}  controller={true}  layers={[layer2]} 
        getTooltip={({object}) => object && `District: ${object.properties.jdist_id}`}
        //</div>getTooltip={({object}: PickingInfo) => object && `${object.jdist_id}\nPopulation: ${object.jdist_id}`}
        //getCursor={() => 'url(images/custom.png), auto'}
        
        >
        < Map     
  
            reuseMaps
            mapStyle={"mapbox://styles/branden-dupont/ckt0h6w5800vb18qq9lniiuoc"}
            mapboxAccessToken={'pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2x5Z21oZWZmMDE4eDJrbjM5N3Rlb3N0cCJ9.c2RlqXh58b3eYU_9pDq_1A'}
            ref={mapRef}
            style={{width:"100%", height:800}}
 
            
            >
               </Map >

                <div className='flex justify-end p-6'>
               <div className='bg-primary-500  text-ywhite min-h-[220px] w-[400px]  p-6 z-40 '>
                <div className="font-bold text-2xl text-ywhite mb-2">
                Colorado Judicial District {SelectedJurisdictionValue }  
                </div>
                <div><hr/></div>
                
                  
                  { SelectedJurisdictionValue ? <div className="mt-2">
                    
                    
                    The {filteredJurisdictionData[0].name}  Attorney's Office  {filteredJurisdictionData[0].partner_type}

                    <div className="flex flex-row">
                    
                     {filteredJurisdictionData[0].dashboard && <div className="mt-4"> <a className="text-lblue  hover:underline p-2" href={filteredJurisdictionData[0].dashboard}>
                      
                      <button
                             className="inline-flex items-center  gap-1.5 rounded-lg border border-ywhite px-2 py-3 text-ywhite transition hover:bg-ywhite hover:text-primary-500 focus:outline-none focus:ring"
                             type="button"
                           >
                             <span className="text-sm font-medium">
                             Dashboard </span>
                   
                             <svg
                               xmlns="http://www.w3.org/2000/svg"
                               className="h-4 w-4"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                               stroke-width="2"
                             >
                               <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                               />
                             </svg>
                           </button>
                           </a>
                          </div>
                    
                    
                     }

                    
                     {filteredJurisdictionData[0].disparity && <div className="mt-4"> <a className="text-lblue  hover:underline p-2" href={filteredJurisdictionData[0].disparity}>
                      
                      <button
                             className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-ywhite px-2 py-3 text-ywhite transition hover:bg-ywhite hover:text-primary-500 focus:outline-none focus:ring"
                             type="button"
                           >
                             <span className="text-sm font-medium">
                             Disparity Analysis </span>
                   
                             <svg
                               xmlns="http://www.w3.org/2000/svg"
                               className="h-4 w-4"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                               stroke-width="2"
                             >
                               <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              
                              />

                             </svg>
                           </button>
                           </a>
                          </div>
                    
                    
                    
                    
                    }
                    
                    </div>
                    </div>
                  
                  :
                                <div className="text-ywhite mt-2 ">
                                Click a judicial district on the map to view a jurisdiction's dashboards and reports.
                              </div>
                              
                  }
                </div>
                
               

                </div>
        </DeckGL>
        
      </div>
      </div>

    );
  }

export default FirstMap