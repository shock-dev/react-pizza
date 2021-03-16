import React from 'react';
import CartComponent from '../components/Cart/cartComponent';
import EmptyCart from '../components/Cart/emptyCart'

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
