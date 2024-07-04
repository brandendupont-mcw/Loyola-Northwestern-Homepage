import Link from "next/link"
import Image from "next/image"

export function Footer2() {

    const headerNavLinks =  [

         
        {
            title: "Prosecutorial Performance Indicators",
            href: "https://prosecutorialperformanceindicators.org/",
          },
         {
          title: "Loyola Chicago Center for Criminal Justice",
          href: "https://loyolaccj.org/",
         },
         {
            title: "The Evaluation Center",
            href: "https://www.the-evaluation-center.org/",
          },

         
      ]
    


  return (
    <>
<footer className="bg-black">
  <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
    <div className="sm:mt-8 bg-accentRed"></div>
  <div className="grid justify-center   sm:mt-10 mb-10 sm:space-x-20">



  <div className="flex  sm:items-end mb-5 ">

<div className=" sm:space-x-4 ">

  {headerNavLinks.map((link) => (
    <span                   key={link.title} className='text-white border-white hover:text-white hover:border-b-2 hover:border-white sm:text-lg text-lg  text-bold '>
    <Link
      href={link.href}
      className="p-1 text-white font-bold"
    >
      {link.title}
    </Link>
    </span>
  ))}
</div>

</div>
  

  </div>
  <div className="pt-8 mt-12 border-t border-white ">
    </div>
  <div>
</div>




  </div>
</footer>
    </>
  )
}




export default Footer2