import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/Ai';

const Cart = ({price=0})=>(<div className="cart">
        <div className="cart__icon"><AiOutlineShoppingCart/></div>
        <div className="cart__price">{price} p.</div>
    </div>)

export default Cart;