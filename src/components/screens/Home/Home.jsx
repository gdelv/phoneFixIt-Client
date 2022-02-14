import React from 'react'
import HomeHeroContainer from './HomeHeroContainer' //complete
import HomeRepairServices from './HomeRepairServices'
import HomeBanner from './HomeBanner'
// import HomeFeatures from './HomeFeatures'
// import HomeSubscribe from './HomeSubscribe'

export const Home = (props) => {
    return (
        <div>
            <HomeHeroContainer
            title='Same Day Heating and A/C Services'
            description="What service can we provide?"
            />
            <HomeRepairServices/>
            <HomeBanner/>
            {/* <HomeFeatures/>
            <HomeSubscribe/> */}
        </div>

    )
}