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
    title: 'Housing Market Indicators Data Portal',
    description: 'On the IHS Housing Market Indicators Data Portal, users can search for, view, and download 13 indicators of housing market health in the Chicago region. The Housing Market Indicators Data Portal makes available data from five core data sets in the IHS Data Clearinghouse. Data available include indicators related to the composition of the housing stock (Cook County only), characteristics of property sales, mortgage lending activity, foreclosure filings, and completed foreclosure auction activity.',
    imgSrc: "/static/images/depaul_housing_chart.png",
    href: "https://www.housingstudies.org/data-portal/",
  },
  {
    title: 'Police Accountability Dashboards',
    description: 'The Use of Force Dashboard displays information related to CPD use of force incidents; and the Accountability Dashboard displays information related to complaints filed against CPD members. This information is made available to members of the public, the media, law enforcement partners and other stakeholders for informational purposes only. The information is reflective of the stored data at the time of posting, and is subject to change.',
    imgSrc: "/static/images/police_accountability_dashboard.png",
    href: "https://www.chicagopolice.org/statistics-data/data-dashboards/",
  },
  {
    title: 'Chicago Violence Tracker',
    description: 'Tracks the average number of victims over a 28-day period, providing insight into the current level of violence within the city. By comparing this data with historical records, the relative level of violence in the city can be assessed',
    imgSrc: "/static/images/suntimes_violence_tracker.png",
    href: "https://chicago.suntimes.com/graphics/crime/violence-tracker/",
  },
  {
    title: 'CPD Incident Data',
    description: "This dataset reflects reported incidents of crime (with the exception of murders where data exists for each victim) that occurred in the City of Chicago from 2001 to present, minus the most recent seven days. Data is extracted from the Chicago Police Department's CLEAR (Citizen Law Enforcement Analysis and Reporting) system.",
    imgSrc: "/static/images/download_icon.png",
    href: "https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-Present/ijzp-q8t2/about_data",
  },
]





export default dashboardData
