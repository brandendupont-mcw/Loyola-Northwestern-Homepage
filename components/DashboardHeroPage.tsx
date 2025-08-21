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



function DashboardHeroPage() {

    




    return (
        <div className=''>
        
        <section className='bg-black h-[400px] '>
                <div className=" ml-20 ">
                  <div className=" max-w-2xl ">
                    <div>
                      <p className="text-2xl font-semibold pt-16  text-white lg:text-6xl text-balance">
                      Chicago Data Dashboard:
                      </p>        
                      <p className="text-2xl font-semibold pt-2  text-yellow lg:text-4xl text-balance">
                      Incidents, Arrests, and Criminal Justice Responses
                      </p> 
                      <p className="mt-4 text-base font-medium text-gray-100">
                        We're tracking the crime, arrests, and criminal justice resposnes across Chicago neighborhoods.
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

export default DashboardHeroPage