import React, { Component } from 'react'
import { ProductConsumer} from '../../../context'
import Product from './Product';
import './styles/ProductList.scss'
import ProductFilters from './ProductFilters';

export default class ProductList extends Component {

    render() {
        return (
            <>
                <h1 className="title is-1 has-text-centered is-uppercase store-title">Store</h1>
                <section className="hero is-small is-info">
                    <div className="hero-body">
                        <div className="columns has-text-centered">
                            <div className="column">
                                <figure class="image is-5by4 center-image store-image">
                                    <img src="https://bulma.io/images/placeholders/128x128.png"/>
                                </figure>
                            </div>
                            <div className="column store-banner">
                                <p className="title">Certified Pre-Own Devices</p>
                                <p className="subtitle">All of our devices have been fully tested, and only those who pass our 30 point inspection are sold here and they come whit a 60 day worry free warranty</p>
                                <p className="title">Self Repairs</p>
                                <p className="subtitle">Looking to put your technical skills to the test? Get the parts to complete your repairs from the pros. Phonefixit.com is your one stop shop for all your repair needs. All parts used in our stores are available for purchase direct to you, with a 60 day warranty. Feel free to contact us for more information. </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="tile is-ancestor">
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-12 is-info">
                            <div class="content">
                                <ProductFilters/>
                            </div>
                        </article>
                    </div>
                    </div>   
                    <div className="columns is-tablet is-centered is-multiline store">
                        <ProductConsumer>
                            {value => {
                                return value.products.map(product => {
                                    return <Product key={product.id} product={product} />;
                                })
                            }}
                        </ProductConsumer>
                    </div>   
                </div>
            </>        
        )
    }
}