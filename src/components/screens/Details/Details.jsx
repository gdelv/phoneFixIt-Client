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
                            let detailTitle = company + ' ' + title + ' ' + condition + ' ' + capacity;
                            let detailSubtitle = color + ' ' + carrier;
                        return (
                            <div className="container">
                                <DetailBreadCrumb title={detailTitle}/>
                                <div class="tile is-ancestor">
                                    <div class="tile is-vertical is-5">
                                        <div class="tile">
                                            <div class="tile is-parent">
                                            <article class="tile is-child notification is-info">
                                                <figure class="image is-4by3">
                                                    <img src={img}/>
                                                </figure>
                                            </article>
                                            </div>
                                        </div>
                                        <div class="tile is-parent">
                                            <article class="tile is-child notification is-danger">
                                                <p class="subtitle">{detailTitle}</p>
                                                <p className="subtitle">Available in the following colors:</p>
                                                {/* make color an array in the data file and map li for available colors */}
                                                <ul>
                                                    <li>{color}</li>
                                                </ul>
                                                <p className="subtitle">The device is also available with more memory in our shop</p>
                                            </article>
                                        </div>
                                        </div>
                                        <div class="tile is-parent">
                                        <article class="tile is-child notification is-success">
                                            <div class="content">
                                            <p class="title is-3">{detailTitle}</p>
                                            <p class="subtitle is-4">$ {price}</p>
                                            <div class="content">
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
                                            </div>
                                        </article>
                                        </div>
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
