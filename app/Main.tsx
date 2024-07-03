import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import Hero3 from '@/components/Hero3'
import Hero4 from '@/components/Hero4'
import DashboardList from '@/components/DashboardList'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import CarouselSpacing from "@/components/Carosel"
import Resources from '@/components/Resources'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <> 
    <Hero4 />

    < DashboardList />
    <div className='bg-gray-50 p-10'>
      
    <div className='mx-auto max-w-8xl pt-40 pb-40 '>
      <div className=' text-2xl pb-10 max-w-md text-2xl text-black text-balance ml-20 '>Reports examining racial and ethnic disparities in justice outcomes</div>
    < CarouselSpacing />
    </div>
    </div>
    <Resources />
    </>
  )
}
