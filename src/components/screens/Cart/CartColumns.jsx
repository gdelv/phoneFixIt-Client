import React from 'react'

export default function CartColumns() {
    return (
        <thead className='cart-column'>
            <tr>
            <th>Products</th>
            <th>Name of Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
            <th>Total</th>
            </tr>
        </thead>
    )
}
