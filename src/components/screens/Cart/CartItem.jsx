import React from 'react'

export default function CartItem({item, value, colorSelected, conditionSelected, carrierSelected}) {
    const { id, title, img, price, total, count, capacity } = item;
    const { increment, decrement, removeItem } =  value;

    return (
        <tr>
            <td className='image-col'>                
                <figure className="image">
                    <img src={img} className='is-rounded'/>
                </figure>
            </td>
            <td className='title-col'>
                {title} {colorSelected} {conditionSelected} {capacity} {carrierSelected}
            </td>
            <td className='price-col'>
                $ {price}
            </td>
            <td className='button-col'>
                <button className="button is-small is-warning" onClick={() => {decrement(id)}}>
                    <i class="fa fa-minus" aria-hidden="true"></i>
                </button>
                    <span> {count} </span>
                <button className="button is-small is-warning" onClick={() => {increment(id)}}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
            </td>
            <td className='remove-col'>
                <span className="icon" style={{display:"block", margin: "0 auto"}} onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </span>
            </td>
            <td className='total-col'>
                <strong>Item Total : $ </strong>
                {total}
            </td>
        </tr>    
    )
}
