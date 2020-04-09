import React, { Component } from 'react'
import CartColumns from './CartColumns'
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../../context";
import CartList from './CartList'
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {cart} = value;
                    if(cart.length > 0) {
                        return (
                            <>
                            <h1 className="title has-text-centered">Your Cart</h1>
                            <table className='table' style={{margin: "0 auto"}}>
                                <CartColumns/>
                                <CartList value={value}/>
                            </table>
                                <CartTotals value={value}/>
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
