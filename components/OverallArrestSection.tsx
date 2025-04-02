

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
                        
        <div className=" h-full p-10 ">
                <div className="p-4 ml-10  ">
                    <div className="text-3xl font-semibold  max-w-xl mt-4" >
                       Violent and Gun Possession Arrests Trends
                    </div>
                    <div className="mt-6 text-lg max-w-xl">
                    This chart shows arrests for violent incidents and gun possession in Chicago.  In 2024, CPD made <span className="pl-1 pr-1 max-w-sm bg-lblue text-white">2,788</span>  more gun possession arrests than violent arrests or  <span className="pl-1 pr-1 max-w-sm bg-lblue text-white">2.2</span> gun possession arrests for every violent arrest. Before 2016, Chicago gun possession and violent arrests were at similar levels.
                    </div>
                    
                    <div className="mt-6 text-lg max-w-xl">
                        This chart  updates yearly. Violent arrests include reported incidents classified as homicide, robbery, sexual and domestic violence, and aggravated assault. Gun possession arrests include reported incidents with an arrest for possession or unlawful use.
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
        Yearly Arrests </span>

      
      </button></a>
      <a href="https://www.cornersresearch.org/">
        <button
        className="inline-flex items-center justify-center  border-2 border-black px-5 py-3 text-black transition bg-ywhite hover:bg-black"
        type="button"
      >
        <span className="text-sm font-medium">
        Monthly Arrests</span>


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
            <DataWrapChart title=""  id="datawrapper-chart-VFkbY" src="https://datawrapper.dwcdn.net/I9EII/1/"   />
            </div>
            </div>

                    </Card>
        )
    }


    return(

        <div className="pt-20 pb-10 bg-ywhite mx-auto ">

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