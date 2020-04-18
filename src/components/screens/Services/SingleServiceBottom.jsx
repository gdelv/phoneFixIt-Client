import React from 'react'

export default function SingleServiceBottom(props) {
    return (
        <div className="columns is-centered is-multiline is-tablet">
            {props.devicesAvailable.map(device => {
                return (
                    <div className="column is-one-third">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-5by3">
                                    <img src={device.logo} alt="logo"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-5">{device.deviceName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
