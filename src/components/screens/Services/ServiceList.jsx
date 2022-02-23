import React, { Component } from 'react'
import { ProductConsumer } from "../../../context";
import Service from './Service'
// import ServiceComputer from './ServiceComputer';

export default class ServiceList extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
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
                    {/* <ServiceComputer
                        title="Computer Repair"
                        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmartguy.com%2Fwebservice%2Fstorage%2Fcategory%2Fcomputer-service-repair.jpg&f=1&nofb=1"
                    /> */}
                </div>
            </>
        )
    }
}
