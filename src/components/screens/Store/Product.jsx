import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../../../context'
export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart, capacity  } = this.props.product;
        return (
            <ProductConsumer>
                {(value) => (
            <div className="column is-one-quarter product">
            <div className="card">
                <div className="card-image" onClick={()=> value.handleDetail(id)}>
                    <figure className="image is-5by3">
                        <Link to="/details">
                            <img src={img} alt="Placeholder image"/>
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
                        {/* commented out button because you shouldn't be able to add to cart without choosing color/carrier/condition */}
                        {/* <button 
                        className="button" 
                        disabled={inCart ? true: false} 
                        onClick={() => {
                            value.addToCart(id);
                            value.openModal(id);
                        }}
                        >
                        {inCart ? (
                            <p disabled>In Cart</p>
                            ) : (<div>
                                <p>Add to Cart <i className='fas fa-cart-plus'/></p>
                            </div>
                            
                            
                            )}
                        </button> */}

                    </div>
                </div>
            </div>
        </div>
                )}
            </ProductConsumer>
        )
    }
}


