import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { ProductConsumer } from '../../../context'


export default class SingleService extends Component {
    render() {
        return (
            <>
                <ProductConsumer>
                    {value => {
                        const { 
                            title,
                            subtitle,
                            info, 
                            img,
                            devicesAvailable
                        } =  value.singleService;
                        return (
                            <div className="container">
                                <h1 className="title">{title}</h1>
                                <p className="subtitle">{subtitle}</p>
                                <img src={img} alt='service' />
                                <p className="subtitle">{info}</p>
                                {devicesAvailable.map(device => {
                                    return (
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image is-4by3">
                                                    <img src={device.logo} alt='logo'/>
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <p className="title">{device.deviceName}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }}
                </ProductConsumer>
            </>
        )
    }
}
