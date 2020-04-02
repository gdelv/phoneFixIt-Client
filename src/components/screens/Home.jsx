import React from 'react'
import HomeHeroContainer from './Home/HomeHeroContainer' //complete
import HomeRepairServices from './Home/HomeRepairServices'
import HomeBanner from './Home/HomeBanner'
import HomeFeatures from './Home/HomeFeatures'
import HomeSubscribe from './Home/HomeSubscribe'

export const Home = (props) => {
    return (
        <div>
            <HomeHeroContainer
            title='WELCOME TO PHONEFIXIT.COM'
            description='We fix your devices at our stores, your place or by mail'
            />
            <HomeRepairServices/>
            <HomeBanner/>
            <HomeFeatures/>
            <HomeSubscribe/>
        </div>

    )
}