import React, { Component } from 'react'
import { ProductConsumer} from '../../../context'
import Product from './Product';
import './styles/ProductList.scss'

export default class ProductList extends Component {

    render() {
        return (
            <>
                <h1 className="title is-1 has-text-centered is-uppercase store-title">Store</h1>
                <div className="columns is-tablet is-centered is-multiline store">
                    <ProductConsumer>
                        {value => {
                            return value.products.map(product => {
                                return <Product key={product.id} product={product} />;
                            })
                        }}
                    </ProductConsumer>
                </div>   
            </>        
        )
    }
}