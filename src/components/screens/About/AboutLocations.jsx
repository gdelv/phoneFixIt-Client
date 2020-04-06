import React, { Component } from 'react'
import './styles/AboutLocations.scss'
import MapContainer from '../../Map'

export default class AboutLocations extends Component {
    render() {
        return (
            <div>
                <p class="title is-2 has-text-centered is-spaced is-capitalized">Our Locations</p>
                <div class="columns has-text-centered">
                    <div class="column">
                        <p className="subtitle is-4 has-text-weight-bold">Hicksville NY</p>
                        <p className="subtitle is-5">94 South Broadway</p>
                        <p className="subtitle is-5">Hicksville, NY, 11801</p>
                        <p className="subtitle is-5">Located on Verma Plaza</p>
                        <p className="subtitle">(516) 513-0800</p>
                    </div>
                    <div class="column">
                        {/* map here */}
                        <MapContainer
                            latitude="40.7663962"
                            longitude="-73.5231724"
                        />
                    </div>
                    
                    <div class="column location-column">
                        <p className="subtitle is-4 has-text-weight-bold">Glen Cove NY</p>
                        <p className="subtitle is-5">208 Glen Street</p>
                        <p className="subtitle is-5">Glen Cove, NY, 11801</p>
                        <p className="subtitle is-5">Located on Orchard Plaza</p>
                        <p className="subtitle">(516) 801-6320</p>
                    </div>
                    <div class="column">
                        {/* map here */}
                        <MapContainer
                            latitude="40.86157"
                            longitude="-73.62391"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
