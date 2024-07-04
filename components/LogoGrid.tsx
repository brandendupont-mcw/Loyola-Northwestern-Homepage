function LogoGrid() {

    return(
        <>
        
        <section className=" ">
        <div class="px-8 py-24  md:px-12 lg:px-32 mx-auto ">
          
          <div class="grid grid-cols 2xl:gap-0.5 xl:gap-10 2xl:grid-cols-5  justify-center">
            <div className="text-4xl">Project Partners</div>
          <div class="flex justify-center col-span-1 px-8">
              <img class="max-h-16" src="../static/images/cdac-logo.png" alt="logo"/>
            </div>
            <div class="flex justify-center col-span-1 px-8">
              <img class="max-h-16" src="../static/images/ccj-black-logo.png" alt="logo"/>
            </div>
            <div class="flex justify-center col-span-1 px-8">
              <img class="max-h-16" src="../static/images/eval-center-logo.png" alt="logo"/>
            </div>
            <div class="flex justify-center col-span-1 px-8">
              <img class="max-h-16" src="../static/images/ppi-logo.png" alt="logo"/>
            </div>
          </div>
        </div>
      </section>
        </>
    
    )


}

export default LogoGrid