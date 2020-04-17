import React from 'react'
import { Link } from 'react-router-dom'
import PayPalButton from './PayPalButton'

export default function CartTotals({value, history}) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <>
            <div className="container cart-total-container">
                <div className="clear-button">
                    <Link to='/store'>
                        <button className="button is-danger is-medium" onClick={() => clearCart()}>Clear Cart</button>
                    </Link>
                </div>
                    <h2 className="subtitle is-3">Subtotal: <strong>$ {cartSubTotal}</strong></h2>
                    <h2 className="subtitle is-3">Tax (8.865%): <strong>$ {cartTax}</strong></h2>
                    <h2 className="subtitle is-3">Total: <strong>$ {cartTotal}</strong></h2>
                    <PayPalButton 
                        total={cartTotal} 
                        clearCart={clearCart} 
                        history={history} 
                    />
            </div>
        </>
    )
}
