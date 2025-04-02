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



function DataHeroPage() {

    




    return (
        <div className=''>
        
        <section className='bg-black h-[400px] '>
                <div className=" ml-20 ">
                  <div className=" max-w-2xl ">
                    <div>
                      <p className="text-2xl font-semibold pt-16  text-white lg:text-4xl text-balance">
                      The State of Policing in Chicago's Neighborhoods:         
                      <span className="text-yellow"> Arrests for Violence and Gun Possession</span> 
                      </p>
                      <p className="mt-4 text-base font-medium text-gray-100">
                        We're tracking the level of arrests for violent crimes including homicide, robbery, aggravated assault and gun possession.
                      </p>
                    </div>
                    <div className=" lg:order-second">
                    <div className=' overflow-hidden'>





</div>
                    </div>
                  </div>
                </div>
              </section>
      </div>
    );
  }

export default DataHeroPage