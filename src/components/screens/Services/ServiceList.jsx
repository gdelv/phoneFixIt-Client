import React, { Component } from 'react'
import { ProductConsumer } from "../../../context";
import Service from './Service'

export default class ServiceList extends Component {
    render() {
        return (
            <>
                <h1 className="title is-1 has-text-centered">Services</h1>
                <div className="columns is-centered is-multiline is-tablet">
                    <ProductConsumer>
                        {value => {
                            return value.services.map(service => {
                                return <Service key={service.id} service={service} />;
                            })
                        }}
                    </ProductConsumer>
                </div>
            </>
        )
    }
}
