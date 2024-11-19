

import * as React from "react";

import DataWrapChart from "./Datawrap"
import Link from "next/link"

const Card = ({children}) => (
    <div>
        {children}
    </div>

  );

function HeroGrid(){


    function Card1(){

        return(
                        
            <Card>
                <div className="p-4 ">


            <div className="p-2">
            <DataWrapChart title="" id="datawrapper-chart-NFIDi" src="https://datawrapper.dwcdn.net/NFIDi/280/"   />
            </div>
            </div>

                    </Card>
        )
    }

    function Card2(){

        return(
            
            <Card>
                <div className="p-4">


            <div className="p-2 h-[300px]">
            <DataWrapChart title=""  id="datawrapper-chart-VFkbY" src="https://datawrapper.dwcdn.net/VFkbY/279/"   />
            </div>
            </div>

                    </Card>
        )
    }


    return(

        <div className="max-w-[1300px] mx-auto mt-20">
<div className="mt-4 text-xl font-mono ">View Weekly Trends in Reported Incidents of Violent and Gun Crime In Chicago  </div>
                    <div className=" mt-2 border-t-2 border-black border-2 mb-10"></div>

        <div className="grid sm:grid-cols-2 grid-cols-1 divide-x-2 mt-1 divide-black   ">
            <div className="    ">
            <Card1>
            </Card1>

            </div>

            <div className="    ">
            <Card2>
            </Card2>
            </div>


        </div>
        <div className="mb-10 mt-10 border-t border-black w-full"></div>

        </div>
    )
}

export default HeroGrid