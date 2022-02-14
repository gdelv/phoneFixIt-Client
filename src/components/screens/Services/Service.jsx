import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { ProductConsumer } from '../../../context';


export default class Service extends Component {
    render() {
        const { id, title, img } = this.props.service;
        return (
            <ProductConsumer>
                {value => (
                    <div className="" style={{margin: '1em'}}>
                        <div className="card" style={{height: '550px'}}>
                            <div className="card-image" onClick={() => value.handleService(id)}>
                                <figure className="image is-5by3">
                                    <Link to='/service'>
                                        <img src={img} alt="service"/>
                                    </Link>
                                </figure>
                            </div>
                            <div className="card-content">
                                {/* <div className="media"> */}
                                    <div className="media-content">
                                        <p className="subtitle is-2 has-text-centered">{title}</p>
                                        {/* <Link to="/service" onClick={() => value.handleService(id)}>
                                            <button className="button">Learn more</button>
                                        </Link> */}
                                        <div style={{display: 'flex', width: '100%', justifyContent: "center"}}>
                                        <button className="button is-info is-outlined is-rounded">
                                            <Link to='/service' onClick={() => value.handleService(id)}>Learn more</Link>
                                        </button>
                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                )}
            </ProductConsumer>
        )
    }
}
