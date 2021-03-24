import React from 'react';
import CartComponent from '../components/Cart/Cart';
import EmptyCart from '../components/Cart/EmptyCart'
import { useSelector } from 'react-redux';

const Cart = () => {
    const { items, totalCount, totalPrice } = useSelector(({ cart }) => cart);
    const itemKeys = Object.keys(items);
    const isEmpty = itemKeys.length;

    return (
        <div className="content">
            <div className="container container--cart">
                {isEmpty ? (
                    <CartComponent
                        items={items}
                        keys={itemKeys}
                        totalCount={totalCount}
                        totalPrice={totalPrice}
                    />
                ) : (
                    <EmptyCart />
                )}
            </div>
        </div>
    )
}

export default Cart;
