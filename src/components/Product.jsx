import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductConsumer>
                {(value) => (
            <div className="column is-one-quarter"  style={{border: "1px solid red"}}>
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
                            <p className="title is-3">{title}</p>
                            <p className="subtitle is-5">${price}</p>
                        </div>
                    </div>
                    <div className="content">
                        <button 
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
                        </button>
                    </div>
                </div>
            </div>
        </div>
                )}
            </ProductConsumer>
        )
    }
}


