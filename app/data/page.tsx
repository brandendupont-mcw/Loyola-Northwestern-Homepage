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
import DataHeroPage from '@/components/DataHeroPage'
import OverallArrestSection from "@/components/OverallArrestSection"
import ChicagoArrestRate from "@/components/ChicagoArrestRate"
import NeighborhoodStreetSegment from "@/components/NeighborhoodStreetSegment"
import Map2 from '@/components/Map2'
import Video from '@/components/Video'

const MAX_DISPLAY = 5

export default function Home() {
  return (
    <> 
    <DataHeroPage />
    <ChicagoArrestRate />
    <OverallArrestSection/>
    <NeighborhoodStreetSegment />

    
    <Footer2 />
    </>
  )
}


