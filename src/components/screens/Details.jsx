import React, { Component } from 'react'
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, 
                            company,
                            img, 
                            info, 
                            price, 
                            title, 
                            inCart 
                        } = value.detailProduct;
                    return (
                        <div className="container">
                            <h1 className="title">Model: {company} {title}</h1>
                    <h2 className="subtitle">${price}</h2>
                            <img src={img} alt='details'/>
                            <p>{info}</p>
                            <div className="btn-container">
                                <Link to="/store">
                                    <button className="button">Back to Store</button>
                                </Link>
                                    <button 
                                        className="button" 
                                        disabled={inCart ? true:false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                    >
                                        {inCart ? "In Cart" : "Add to Cart"}
                                    </button>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
