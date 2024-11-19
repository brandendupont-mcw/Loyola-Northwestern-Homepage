import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
//import Hero3 from '@/components/Hero3'
import Hero3 from '@/components/Hero3'
import Hero4 from '@/components/Hero4'
import Hero5 from '@/components/Hero5'
import DashboardList from '@/components/DashboardList'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import CarouselSpacing from "@/components/Carosel"
import Timeline from "@/components/Timeline"
import Toolkit from "@/components/Toolkit"
import Resources from '@/components/Resources'
import LogoSection from '@/components/LogoSection'
import Footer2 from '@/components/Footer2'
import HeroGrid from "@/components/HeroGrid"
import Map2 from '@/components/Map2'
import Video from '@/components/Video'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <> 
    <Map2 />
    <HeroGrid/>
    < DashboardList />
    <div className=' bg-black p-10'>
    <div className='mx-auto max-w-8xl pt-40 pb-40  '>
    <div className='pb-4 max-w-md text-4xl text-ywhite  sm:ml-20 '>Analyses of Racial & Ethnic Disparities </div>
    <p className='text-md pb-10 max-w-lg text-ywhite  sm:ml-20'>The fair and just treatment of all communities at each stage of the criminal justice process is of significant importance. In Spring 2023, we completed analyses of racial/ethnic disparities at points of prosecutorial discretion, including felony declination, case disposition, charge reduction, and sentencing. </p>
    < CarouselSpacing />
    </div>
    </div>
    <Footer2 />
    </>
  )
}
