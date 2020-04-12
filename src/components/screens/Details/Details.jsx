import React, { Component } from 'react'
import { ProductConsumer } from "../../../context";
import { Link } from "react-router-dom";
import DetailBanner from './DetailBanner';
import DetailBreadCrumb from './DetailBreadCrumb';
import './styles/Details.scss'

export default class Details extends Component {
    render() {
        return (
            <>
                <ProductConsumer>
                    {(value) => {
                        const { id, 
                                company,
                                img, 
                                info, 
                                price, 
                                title, 
                                inCart,
                                condition, 
                                capacity,
                                color,
                                carrier
                            } = value.detailProduct;
                        return (
                            <div className="container">
                                <DetailBreadCrumb title={company + ' ' + title + ' ' + color}/>
                                <h1 className="title">Model: {company} {title} {condition} {capacity}</h1>
                                <h2 className="subtitle">${price}</h2>
                                <h3 className="subtitle">{color}</h3>
                                <h3 className="subtitle">{carrier}</h3>
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
                <DetailBanner 
                    title='we do it right'
                    subtitle='learn about our offerings'
                    description='Driven by quality, we’ve been at it long enough to know how important it is to provide top notch work and real customer service. We’re there for customers whenever they need us. When you require help or guidance on which type of repair you need, trust the real pros. Come by our Screen Repair Service today.'
                />
            </>
        )
    }
}
