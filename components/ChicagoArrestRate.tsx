

import * as React from "react";

import DataWrapChart from "./Datawrap"
import Link from "next/link"

const Card = ({children}) => (
    <div>
        {children}
    </div>

  );
  
function OverallArrestSection(){


    function Card1(){

        return(
                        
        <div className=" h-full p-10  ">
                <div className="p-4 ml-10  ">
                    <div className="text-3xl font-semibold  max-w-xl mt-4" >
                       Unsolved Violence in Chicago
                    </div>
                    <div className="mt-6 text-lg max-w-xl">
                        Nationally, Chicago has one of the lowest arrest rates for violent crimes among the largest 50 US cities. Police make few arrests in neighborhoods with high homicides, shootings, and violent crime. A 2025 <a className="underline hover:text-lblue" href="https://www.wbez.org/chicago/2017/01/26/chicagos-murder-clearance-rate-falls-to-historic-low"> Chicago Sun Times</a> report found an arrest is made in only <span className="pl-1 pr-1 max-w-sm bg-primary-500 text-white">6%</span> of shootings citywide. Neighborhoods of color with high amounts of violent crime have even lower arrest rates for <a className="underline hover:text-lblue" href="https://www.wbez.org/chicago/2017/01/26/chicagos-murder-clearance-rate-falls-to-historic-low"> shootings</a> and <a className="underline hover:text-lblue" href="https://www.wbez.org/chicago/2017/01/26/chicagos-murder-clearance-rate-falls-to-historic-low"> homicides</a> compared to the citywide average.
                    </div>
                    
                    <div className="mt-6 text-lg max-w-xl">
                        This chart  updates yearly. Violent arrests include reported incidents classified as homicide, robbery, sexual and domestic violence, and aggravated assault.
                    </div>


            <div className="p-2">

            </div>
            </div>
            <div className="grid justify-left ml-14  mb-10 sm:space-x-20">


<div className="mt-2 flex flex-col gap-0 sm:mt-0 sm:flex-row sm:items-center">
     <a href="https://loyolaccj.org"> <button
        className="inline-flex items-center justify-center  border-2 border-black px-5 py-3 text-white transition bg-black hover:bg-black "
        type="button"
      >
        <span className="text-sm font-medium">
        Yearly Arrest Rate </span>

      
      </button></a>
      <a href="https://www.cornersresearch.org/">
        <button
        className="inline-flex items-center justify-center  border-2 border-black px-5 py-3 text-black transition bg-ywhite hover:bg-black"
        type="button"
      >
        <span className="text-sm font-medium">
        Monthly Arrest Rate</span>


      </button>
      </a>
    </div>



</div>

            </div>
                 
        )
    }

    function Card2(){

        return(
            
            <Card>
                <div className="p-4 ">


            <div className="p-10 ">
            <DataWrapChart title=""  id="datawrapper-chart-VFkbY" src="https://datawrapper.dwcdn.net/9u24u/1/"   />
            </div>
            </div>

                    </Card>
        )
    }


    return(

        <div className="pt-20 pb-10 bg-ywhite ">

                    <div className=""></div>

        <div className="grid sm:grid-cols-2 grid-cols-1   ">
            <div className="    ">
            <Card1>
            </Card1>

            </div>

            <div className="    ">
            <Card2>
            </Card2>
            </div>


        </div>
        <div className=" w-full"></div>

        </div>
    )
}

export default OverallArrestSection