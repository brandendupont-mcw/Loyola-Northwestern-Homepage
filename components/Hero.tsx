

function Hero(){

    return(
        <>

<section>
                <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 ">
                  <div className="grid items-center grid-cols-1 gap-4 list-none lg:grid-cols-2 lg:gap-24">
                    <div>
                      <span className="text-xs font-bold tracking-wide text-gray-500 uppercase">data</span>
                      <p className="mt-8 text-4xl font-semibold tracking-tight text-gray-900 text-balance">
                        Empowering users with data control daily
                      </p>
                      <p className="mt-4 text-base font-medium text-gray-500">
                        Control and added security. With decentralization, users have more
                        control over their data and transactions, and the platform is less
                        susceptible to malicious attacks.
                      </p>
                      <div className="flex flex-col items-center gap-2 mx-auto mt-8 md:flex-row">
                        <button className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black" aria-label="Primary action">
                          Primary button
                        </button>
                        <button className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Secondary action">
                          Secondary button
                        </button>
                      </div>
                    </div>
                    <div className=" lg:order-first">
                      <div className="">
                      <iframe title="unique" id="datawrapper-chart-URTfs" src="https://datawrapper.dwcdn.net/URTfs/2/" scrolling="no" frameBorder="0"  width="600" height="477" ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            
        
        </>
    )
}

export default Hero