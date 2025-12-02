import NorthwesternLogo from '../public/static/images/crnrs-rev-horiz.svg'
import LoyolaLogo from '../public/static/images/ccj-white.svg'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

function Header2(){

    return(
        <header>
          <div className="mx-auto bg-primary-500  px-4 py-4 sm:px-6  lg:px-10">
              <div className="flex justify-between bg-primary-500">
                 <a href="https://www.loyolaccj.org/" target="_blank" rel="noopener noreferrer">
                 <LoyolaLogo className="w-[200px]" /></a>
                 <a href="https://www.cornersresearch.org/" target="_blank" rel="noopener noreferrer">
                 <NorthwesternLogo className="w-[350px]" /></a>
             </div>
          </div>
          <div className="2xl:pl-32 lg:pl-10">
          <div className="flex items-center space-x-4 leading-6 sm:space-x-8">
        {headerNavLinks
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400
              sm:block"
            >
              {link.title}
            </Link>
          ))}
        
        <MobileNav />
      </div>
      </div>
</header>

    )
}

export default Header2