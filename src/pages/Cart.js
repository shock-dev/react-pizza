import React from 'react';
import CartComponent from '../components/Cart/CartComponent';
import EmptyCart from '../components/Cart/EmptyCart'

const Cart = () => {
    const flag = true;

    return (
        <div className="content">
            <div className="container container--cart">
                {flag ? <CartComponent /> : <EmptyCart />}
            </div>
        </div>
    )
}

export default Cart;
