import React from 'react'
import HomeHeroContainer from './Home/HomeHeroContainer' //complete
import HomeLinks from './Home/HomeLinks'
import HomeBottomContainers from './Home/HomeBottomContainers'

export const Home = (props) => {
    return (
        <div>
            <HomeHeroContainer
            title='WELCOME TO PHONEFIXIT.COM'
            description='We fix your devices at our stores, your place or by mail'
            />
            <HomeLinks/>
            <HomeBottomContainers/>
        </div>

    )
}