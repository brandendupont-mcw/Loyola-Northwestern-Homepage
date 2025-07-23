interface Dashboard {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const dashboardData: Dashboard[] = [
  {
    title: 'Cook County Data Dashboard',
    description: `The Cook County Criminal Justice Data Dashboard provides accessible data about the extent and nature of crime in Cook County and how the justice system responds to and handles criminal cases.`,
    imgSrc: '/static/images/cook_county_dashboard.png',
    href: "https://cook-dashboard.loyolaccj.org/",
  },
  {
    title: 'Chicago Public Safety DataHub',
    description: 'An integrated data dashboard supporting efforts to make Chicago the nation’s safest large city.',
    imgSrc: "/static/images/public_safety_datahub.png",
    href: "https://www.chipublicsafety.org/",
  },
{
    title: 'CPD Violence Reduction Dashboard',
    description: "The Mayor's Office Violence Reduction Dashboard shares real-time data on violence trends in Chicago and its inequitable impact across the city, as well as critical information about the City’s community-centered and trauma-informed response.",
    imgSrc: "/static/images/violence_reduction_dashboard.png",
    href: "https://www.chicago.gov/city/en/sites/vrd/home.html",
  },
{
    title: 'Live Crime Tracker',
    description: 'Live Crime Tracker provides daily updates on eight property and violent crime categories in more than 50 large U.S. cities. The site lets users visualize and analyze daily, monthly, and yearly crime trends and compare crime and victimization across cities.',
    imgSrc: "/static/images/live_crime_tracker.png",
    href: "https://livecrimetracker.norc.org/#home",
  },
  {
    title: 'Socioeconomic and City Data Comparison Dashboard',
    description: 'This dashboard offers the ability to analyze Chicago’s demographic and socioeconomic landscape, by integrating verified U.S. Census and City of Chicago data to shed light on the intersection of the City’s population, socioeconomic conditions, and City service and program delivery.',
    imgSrc: "/static/images/socioeconomic_dashboard.png",
    href: "https://igchicago.org/information-portal/data-dashboards/socioeconomic-and-city-data-comparison-dashboard/",
  },
  {
    title: 'CPD Incident Data',
    description: "This dataset reflects reported incidents of crime (with the exception of murders where data exists for each victim) that occurred in the City of Chicago from 2001 to present, minus the most recent seven days. Data is extracted from the Chicago Police Department's CLEAR (Citizen Law Enforcement Analysis and Reporting) system.",
    imgSrc: "/static/images/download_icon.png",
    href: "https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-Present/ijzp-q8t2/about_data",
  },
]





export default dashboardData
