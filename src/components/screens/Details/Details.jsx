import React, { Component } from 'react'
import { ProductConsumer } from "../../../context";
import { Link } from "react-router-dom";
import DetailBanner from './DetailBanner';
import DetailBreadCrumb from './DetailBreadCrumb';
import './styles/Details.scss'
import DetailImageTile from './DetailImageTile';
import DetailInfoTile from './DetailInfoTile';

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
                                <div className="tile is-ancestor">
                                    <div className="tile is-vertical is-5">
                                        <div className="tile">
                                            <DetailImageTile img={img} />
                                        </div>
                                            <DetailInfoTile color={color} detailTitle={detailTitle} />
                                    </div>
                                            <div className="tile is-parent">
                                                <article className="tile is-child notification is-success">
                                                    <div className="content">
                                                        <p className="title is-3">{detailTitle}</p>
                                                        <p className="subtitle is-4">$ {price}</p>
                                                            <div className="content">
                                                                {/* ENTER DROPDOWNS HERE */}
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
