import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../../../context'
export default class Product extends Component {
    render() {
        const { id, title, img, price, capacity  } = this.props.product;
        return (
            <ProductConsumer>
                {(value) => (
                <div className="column is-one-quarter product">
                    <div className="card">
                        <div className="card-image" onClick={()=> value.handleDetail(id)}>
                            <figure className="image is-5by3">
                                <Link to="/details">
                                    <img src={img} alt="product"/>
                                </Link>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-5">{title} {capacity}</p>
                                    <p className="subtitle is-5">${price}</p>
                                </div>
                            </div>
                            <div className="content">
                                <Link to='/details' onClick={()=> value.handleDetail(id)}>
                                    <button className="button">See more...</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </ProductConsumer>
        )
    }
}


