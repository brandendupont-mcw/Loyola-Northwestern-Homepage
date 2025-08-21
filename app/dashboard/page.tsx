import Footer2 from '@/components/Footer2'
import DashboardHeroPage from '@/components/DashboardHeroPage'
import OverallArrestSection from "@/components/OverallArrestSection"
import ChicagoCrimeMap from "@/components/ChicagoCrimeMap"
import NeighborhoodStreetSegment from "@/components/NeighborhoodStreetSegment"

const MAX_DISPLAY = 5

export default function Home() {
  return (
    <> 
    <DashboardHeroPage />
    <ChicagoCrimeMap />
    <OverallArrestSection/>
    <NeighborhoodStreetSegment />

    
    <Footer2 />
    </>
  )
}


