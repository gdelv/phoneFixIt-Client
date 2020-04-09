import React, { Component } from 'react'
import { ProductConsumer} from '../../context'
import Product from '../Product';
export default class ProductList extends Component {

    render() {
        return (
                <div className="columns is-mobile is-centered is-multiline">
                    <ProductConsumer>
                        {value => {
                            return value.products.map(product => {
                                return <Product key={product.id} product={product} />;
                            })
                        }}
                    </ProductConsumer>
                </div>           
        )
    }
}