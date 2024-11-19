import * as React from "react"

import { Card, CardTitle, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselSize() {

  const data = [
    "https://datawrapper.dwcdn.net/TMIL7/2/",  

    'https://datawrapper.dwcdn.net/r5Ywe/1/',  
    'https://datawrapper.dwcdn.net/Jw7eU/1/',  
    'https://datawrapper.dwcdn.net/fNzsA/1/',
  ]

  const image_list = [
    
    {src_link:"/static/images/communities4peace.png",
    report_link:"https://cdn.prod.website-files.com/634dd45091db1de63b7112d9/65fb5e750303aea0e25c5f75_CORNERS_CP4P_3.20.2022.pdf"

    },
    {src_link:"/static/images/street_outreach.png",
    report_link:"https://www.pnas.org/doi/10.1073/pnas.2300327120"

    },
    {src_link:"/static/images/arrests-illegal-firearm.png",
      report_link:"https://loyolaccj.org/firearmpossessionsentencinginillinois.pdf"
  
      },
    {src_link:"/static/images/media-accountability.png",
    report_link:"https://cdn.prod.website-files.com/634dd45091db1de63b7112d9/66166c3b9118d507a806b952_Media%20Accountability%20Project%20-%20Research%20Brief%20-%209%20April%202024.pdf"

    },
    {src_link:"/static/images/decarceration-fellowship.png",
    report_link:"https://cdn.prod.website-files.com/634dd45091db1de63b7112d9/6683003ffeffe2658d7eaaf7_CORNERS_Decarceration%20Fellowship%20Baseline%20Report.pdf"

    }
  ]
  return (
    <div className=" ">
    <div className="mx-auto grid justify-center justify-items-center sm:pr-20 sm:pl-20 sm:pl-6">
    <Carousel
      opts={{
        align: "start",
      }}
      className="lg:w-full sm:w-[40%] w-[25%] "
    >
  
      <CarouselContent>
        {image_list.map((e, index) => (
          <CarouselItem key={index} className="xl:basis-1/2 2xl:basis-1/3 ">
            <div className="p-1">
              <Card >
                <CardContent className="flex   p-[1px] ">
                <div className="">
      <img
      alt="a report"
      className="max-h-52"
    src={e.src_link} />
    </div>
                </CardContent>
              </Card>
              <a href={e.report_link} className="flex flex-row gap-2 mt-2 text-ywhite hover:underline  hover:text-lblue">View Report 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFBF1" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>

</a>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </div>
  )
}


