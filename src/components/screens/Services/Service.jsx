import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { ProductConsumer } from '../../../context';


export default class Service extends Component {
    render() {
        const { id, title, img } = this.props.service;
        return (
            <ProductConsumer>
                {value => (
                    <div className="column is-one-third" style={{margin: ''}}>
                        <div className="card" style={{height: '400px'}}>
                            <div className="card-image" onClick={() => value.handleService(id)}>
                                <figure className="image is-5by4">
                                    <Link to='/service'>
                                        <img src={img} alt="service" style={{color:"red"}}/>
                                    </Link>
                                </figure>
                            </div>
                            <div className="card-content">
                                {/* <div className="media"> */}
                                    <div className="media-content">
                                        <p className="subtitle is-5 has-text-centered">{title}</p>
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
