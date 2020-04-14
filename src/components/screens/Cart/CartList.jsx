import React from 'react'
import CartItem from './CartItem'
export default function CartList({value}) {
    const {cart, colorSelected, carrierSelected, conditionSelected} = value;
    // console.log(value, cart);

    return (
        <tbody>
            {cart.map( item => {
                return  <CartItem 
                            key={item.id} 
                            item={item} 
                            value={value} 
                            colorSelected={colorSelected} 
                            carrierSelected={carrierSelected} 
                            conditionSelected={conditionSelected} 
                        />
            })}
        </tbody>
    )
}
