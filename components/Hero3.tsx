import FirstMap from '@/components/Map'
import SecondMap from '@/components/Map2'



function Hero3(){


    return(


<div className="max-w-4xl  lg:max-w-full " >
  

    <section className="overflow-hidden bg-white sm:grid sm:grid-cols-2 ">
      <div className="p-8 md:p-12   grid place-items-center">
        

      <section>
                <div className="px-8 py-24 mx-auto md:px-4 lg:px-10 max-w-7xl">
                  <div className="grid grid-cols-1 gap-12 2xl:grid-cols-2 2xl:gap-24">
                    <div>
                      <h1 className="text-2xl font-semibold   text-primary-500 lg:text-4xl text-balance">
                      18 Jurisdictions Committed to Data and Innovation in Prosecution.
                      </h1>
                      <p className="mt-4 text-base font-medium  text-black text-balance">
                      Explore data dashboards for each of the participating Judicial Districts by <span className='underline decoration-lblue decoration-2 underline-offset-2'>clicking on the map.</span> We hope that giving communities access to information about case referrals, outcomes, and performance indicators will lead to greater accountability and improve the fairness and effectiveness of the criminal justice system.
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-12 text-balance">
                      <div className="flex flex-col gap-4 lg:flex-row">
                        <div>
                          <span className="flex items-center justify-center bg-gray-100 rounded-full size-8">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                            </svg>

                              </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-primary-500">15</h3>
                          <p className="mt-2 text-sm text-black">
                          Released External Dashboards
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 lg:flex-row">
                        <div>
                          <span className="flex items-center justify-center bg-gray-100 rounded-full size-8">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                      </svg>

                              </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-primary-500">8</h3>
                          <p className="mt-2 text-md text-black">
                          Analyzed Racial and Ethnic Disparities in their office
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 lg:flex-row">
                        <div>
                          <span className="flex items-center justify-center bg-gray-100 rounded-full size-8">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>

                              
                              </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-primary-500">15</h3>
                          <p className="mt-2 text-sm text-black">
                          Published External Data Stories in their Jurisdiction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            
      </div>
    
    <div className=' relative'>
      <SecondMap />
      </div>
    </section>
    

    
    </div>
    )
}

export default Hero3