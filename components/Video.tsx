
function Video(){


    return(
        <div>

        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 font-sans bg-black ">
      <div className="flex sm:flex-col flex-row items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl bg-black">
        <div className="sm:mb-16 lg:my-40 lg:max-w-lg lg:pr-5 bg-black">
          <div className="max-w-xl mb-6 bg-black">
            <div>
            </div>
            <h2 className="max-w-lg mb-6 text-5xl  tracking-tight text-white text-6xl sm:leading-none hidden sm:block ">
                Hear From Project Leaders
            </h2>
            <h2 className="max-w-lg sm:mb-6 text-3xl  tracking-tight text-white  sm:hidden align-items-center ml-10 sm:mb-0 pb-10 ">
            Hear From Project Leaders
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-black inset-y-0 sm:right-0 sm:w-1/2 max-w-xl px-4 sm:mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0 sm:h-full sm:block hidden ">
      <iframe className="sm:w-full sm:h-full w-full aspect-video bg-black sm:mt-0 mt-10 " src="https://www.youtube.com//embed/2WyTBMOdSE8?modestbranding=1" title="YouTube video player" frameBorder="0"controls="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
      </div>
      <iframe className="sm:w-full flex sm:h-full w-full h-[300px] bg-black sm:mt-0 mt-10 sm:hidden block " src="https://www.youtube.com//embed/2WyTBMOdSE8?modestbranding=1" title="YouTube video player" frameBorder="0"controls="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
    </div>




        </div>
    )
}

export default Video