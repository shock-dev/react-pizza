import React from 'react';
import CartComponent from '../components/cart/cartComponent';
import EmptyCart from '../components/cart/emptyCart'

const Cart: React.FC = () => {
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
