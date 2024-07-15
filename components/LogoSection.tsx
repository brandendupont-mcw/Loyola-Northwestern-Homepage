function LogoGrid() {

    return(
        <>
        
        <section className=" ">
        <div className="px-8 py-24  md:px-12 lg:px-32 mx-auto ">
          
          <div className="grid grid-cols 2xl:gap-0.5 gap-10 xl:gap-10 2xl:grid-cols-5  justify-center">
            <div className="text-4xl">Project Partners</div>
          <div className="flex justify-center col-span-1 px-8">
              <img className="max-h-16" src="../static/images/cdac-logo.png" alt="logo"/>
            </div>
            <div className="flex justify-center col-span-1 px-8">
              <img className="max-h-16" src="../static/images/ccj-black-logo.png" alt="logo"/>
            </div>
            <div className="flex justify-center col-span-1 px-8">
              <img className="max-h-16" src="../static/images/eval-center-logo.png" alt="logo"/>
            </div>
            <div className="flex justify-center col-span-1 px-8">
              <img className="max-h-16" src="../static/images/ppi-logo.png" alt="logo"/>
            </div>
          </div>
        </div>
      </section>
        </>
    
    )


}

function LogoSection(){

  return(

      <section>
          
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h1 className="text-4xl font-semibold tracking-tighter text-primary-500 lg:text-5xl text-balance">
            Project Partners 
            </h1>
            <p className="mt-4 text-base font-medium text-black text-balance">
            This project is a partnership between Dr. Lauren Gase,<a className="text-lblue hover:underline" href="https://www.the-evaluation-center.org/project/prosecutorial-dashboards/"> The Evaluation Center at the University of Colorado Denver</a>; Dr. Don Stemen and Branden DuPont, the <a className="text-lblue hover:underline" href="https://loyolaccj.org"> Center for Criminal Justice at Loyola University Chicago</a> ; and Tuan Nguyen, the <a className="text-lblue hover:underline" href="https://coloradoprosecutors.org/">Colorado District Attorneys’ Council</a>. 

            </p>
            <p className="mt-4 text-base font-medium text-black text-balance">
              
      The project is rooted in a national model, the <a className="text-lblue hover:underline" href="https://prosecutorialperformanceindicators.org/">Prosecutorial Performance Indicators Project (PPI)</a>. To learn more, visit www.theppis.org. 
      Thanks to the Microsoft Justice Reform Initiative for funding the catalytic work of the Colorado Prosecutorial Dashboards Project
            </p>
          </div>
          <div className="flex flex-col text-balance">
          <div className=" mx-auto ">
          
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 py-24">
            <div className="">
              <img className="max-h-14" src="../static/images/eval-center-logo.png" alt="logo"/>
            </div>
            <div className="">
              <img className="max-h-14" src="../static/images/ccj-black-logo.png" alt="logo"/>
            </div>
            <div className="">
              <img className="max-h-14" src="../static/images/ppi-logo.png" alt="logo"/>
            </div>
            <div className="">
              <img className="max-h-16" src="../static/images/cdac-logo.png" alt="logo"/>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  
  )
}

export default LogoSection