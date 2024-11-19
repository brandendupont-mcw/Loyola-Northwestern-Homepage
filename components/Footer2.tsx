import Link from "next/link"
import Image from "next/image"

export function Footer2() {

    const headerNavLinks =  [

         
        {
            title: "Northwestern Corners",
            href: "https://www.cornersresearch.org/",
          },
         {
          title: "Loyola Chicago Center for Criminal Justice",
          href: "https://loyolaccj.org/",
         },
         
      ]
    


  return (
    <>
<footer className="bg-black">
  <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
    <div className="sm:mt-8 bg-accentRed"></div>
  <div className="grid justify-center   sm:mt-10 mb-10 sm:space-x-20">


  <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
       <a href="https://loyolaccj.org"> <button
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-ywhite px-5 py-3 text-ywhite transition hover:bg-ywhite hover:text-primary-500 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium">
 Loyola CCJ </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button></a>
        <a href="https://www.cornersresearch.org/">
          <button
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-ywhite text-ywhite px-5 py-3 text-black  transition hover:bg-ywhite hover:text-primary-500  focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium">
 Northwestern Corners </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>
        </a>
      </div>

  

  </div>
  <div className="pt-8 mt-12 border-t border-white ">
    <div className="text-white grid justify-center">Updated On: 11-20-2024</div>
    </div>

    
  <div>
    
</div>




  </div>
  
</footer>
    </>
  )
}




export default Footer2