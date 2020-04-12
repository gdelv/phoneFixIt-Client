import React, { Component } from 'react'
import CartColumns from './CartColumns'
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../../context";
import CartList from './CartList'
import CartTotals from './CartTotals';
import './styles/Cart.scss'
export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {cart} = value;
                    if(cart.length > 0) {
                        return (
                            <>
                            <h1 className="title is-1 has-text-centered cart-title">Your Cart</h1>
                            <div className="table-container">
                                <table className='table is-striped is-narrow is-fullwidth is-bordered is-hoverable cart-table' style={{margin: "0 auto"}}>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                </table>
                            </div>
                                <CartTotals value={value} history={this.props.history}/>
                            </>
                        )
                    } else {
                        return (<EmptyCart/>)
                    }
                }}
            </ProductConsumer>
        )
    }
}
