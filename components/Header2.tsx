import NorthwesternLogo from '../public/static/images/crnrs-rev-horiz.svg'
import LoyolaLogo from '../public/static/images/ccj-white.svg'

function Header2(){

    return(
        <header>
  <div className="mx-auto bg-primary-500  px-4 py-4 sm:px-6  lg:px-10">

      <div className="flex justify-between bg-primary-500">
        <LoyolaLogo className="w-[200px]" />
       
        <NorthwesternLogo className="w-[350px]" />
      </div>

   
  </div>
</header>

    )
}

export default Header2