import React from 'react'
import AboutLocations from './About/AboutLocations'
import AboutHours from './About/AboutHours'
import AboutStatement from './About/AboutStatement'

export const About = (props) => {
    return (
        <div>
            <AboutStatement/>
            <AboutLocations/>
            <AboutHours/>
        </div>

    )
}
