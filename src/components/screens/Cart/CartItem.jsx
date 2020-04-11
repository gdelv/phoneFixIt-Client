import React from 'react'

export default function CartItem({item, value}) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } =  value;

    return (
        <tr>
            <td>                
                <figure class="image is-128x128">
                    <img src={img} />
                </figure>
            </td>
            <td>
                {title}
            </td>
            <td>
                {price}
            </td>
            <td>
                <button className="button" onClick={() => {decrement(id)}}>-</button>
                <span>{count}</span>
                <button className="button" onClick={() => {increment(id)}}>+</button>
            </td>
            <td>
                <span className="icon" style={{display:"block", margin: "0 auto"}} onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </span>
            </td>
            <td>
                <strong>Item Total : $ </strong>
                {total}
            </td>
        </tr>    
    )
}
