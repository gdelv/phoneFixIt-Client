import React from 'react'
import { Link } from 'react-router-dom'

export default function CartTotals({value}) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <>
            <div className="container" style={{textAlign: "center"}}>
                <Link to='/store'>
                    <button className="button is-danger" onClick={() => clearCart()}>Clear Cart</button>
                </Link>
                <h2 className="subtitle">Subtotal: <strong>$ {cartSubTotal}</strong></h2>
                <h2 className="subtitle">Tax: <strong>$ {cartTax}</strong></h2>
                <h2 className="subtitle">Total: <strong>$ {cartTotal}</strong></h2>
            </div>
        </>
    )
}
