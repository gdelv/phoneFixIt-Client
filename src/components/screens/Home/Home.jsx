import React from 'react'
import HomeHeroContainer from './HomeHeroContainer' //complete
import HomeRepairServices from './HomeRepairServices'
import HomeBanner from './HomeBanner'
import HomeFeatures from './HomeFeatures'
import HomeSubscribe from './HomeSubscribe'

export const Home = (props) => {
    return (
        <div>
            <HomeHeroContainer
            title='WELCOME TO 1stCallHVACSolutions.COM'
            description='We fix your devices at our stores, your place or by mail'
            />
            <HomeRepairServices/>
            <HomeBanner/>
            <HomeFeatures/>
            <HomeSubscribe/>
        </div>

    )
}