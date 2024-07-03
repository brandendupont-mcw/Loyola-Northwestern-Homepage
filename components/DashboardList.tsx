
function DashboardListItem( { title, link }) {
    return (
      <div className="text-sm pt-2 pb-2 pl-2 font-semibold text-black  border-black border-b-2 hover:bg-white  ">
      <div className="flex flex-col ">
                  <a className='cursor-hover' href={link}><div className="text-md mb-1 font-semibold  text-black"> {title} →</div> </a>
      
                  
            </div>
                  </div>
    )
  }

function DashboardList(){

    const linkList = [
        {title:'1st Judicial District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/1st/'},
        {title:'Denver District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/2nd/'},
        {title:'5th Judicial District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/5th'},
        {title:'6th Judicial District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/6th'},
        {title:'7th Judicial District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/7th/'},
        {title:'8th Judicial District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/8th/'},
        {title:'9th Judicial District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/9th/'},
        {title:'11th Judicial District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/11th/'},
        {title:'12th Judicial District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/12th/'},
        {title:'17th Judicial District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/17th/'},
        {title:'18th Judicial District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/18th/'},
        {title:'19th Judicial District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/19th/'},
        {title:'Boulder District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/20th/'},
        {title:'21st Judicial District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/21st/'},
        {title:'22nd Judicial District Attorney Data Dashboard',
        link:'https://data.dacolorado.org/22nd/'}
    ]

    

    return(
        <div className="bg-orange-400 pt-20 py-32 ">
        <div className=' pr-5 pl-5  mx-auto max-w-4xl'>
        <div className='text-black font-semibold text-3xl max-w-sm mb-4 leading-tight mb-6 bg-orange-400  pt-4'>
        <div className="p-1 text-black "> Explore Colorado Prosecutorial Dashboards </div>
    
    </div>
    <p className="mt-2 text-black font-md mb-10 ml-1">
    Data dashboards include information in eight areas: felony cases filed and declined; charging and filing; case resolution; diversion and deferrals; sentencing; defendant characteristics; victim characteristics and processes; staffing and caseloads.
    </p>
        <ul className="text-xs ml-1">
        <div className="grid grid-cols-3 gap-10 text-xs   ">
            {
               linkList.map((d) => (
    
               
                        <DashboardListItem
                        key={d.title}
                        title={d.title}
                        link={d.link}
                        />
                        
                
    
    
                ))}
                </div>
    
        </ul>
    
    
    
    
        </div>
        </div>
    )
}

export default DashboardList