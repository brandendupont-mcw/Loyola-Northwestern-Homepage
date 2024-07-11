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
    
    {src_link:"/static/images/jd1.png",
    report_link:"https://data.dacolorado.org/1st-disparity-analysis/"

    },
    {src_link:"/static/images/jd2.png",
    report_link:"https://data.dacolorado.org/2nd-disparity-analysis/"

    },
    {src_link:"/static/images/jd5.png",
    report_link:"https://data.dacolorado.org/5th-disparity-analysis/"

    },
    {src_link:"/static/images/jd6.png",
    report_link:"https://data.dacolorado.org/6th-disparity-analysis/"

    },
    {src_link:"/static/images/jd7.png",
    report_link:"https://data.dacolorado.org/7th-disparity-analysis/"

    },
    {src_link:"/static/images/jd8.png",
    report_link:"https://data.dacolorado.org/8th-disparity-analysis/"

    },
    {src_link:"/static/images/jd18.png",
    report_link:"https://data.dacolorado.org/18th-disparity-analysis/"

    },
    {src_link:"/static/images/jd20.png",
    report_link:"https://data.dacolorado.org/20th-disparity-analysis/"

    }
  ]
  return (
    <div className=" ">
    <div className="mx-auto grid sm:justify-center justify-items-center pr-20 pl-20">
    <Carousel
      opts={{
        align: "start",
      }}
      className="sm:w-full w-[70%] "
    >
  
      <CarouselContent>
        {image_list.map((e, index) => (
          <CarouselItem key={index} className="xl:basis-1/2 2xl:basis-1/3">
            <div className="p-1">
              <Card >
                <CardContent className="flex  items-center justify-center p-[1px] ">
                <div className="">
      <img
      alt="a report"
      className=""
    src={e.src_link} />
    </div>
                </CardContent>
              </Card>
              <a href={e.report_link} className="flex flex-row gap-2 mt-2 text-ywhite hover:underline pl-2 hover:text-lblue">View Report 
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


