import React from 'react';
import { Link } from 'react-router-dom';
import EmptyCartImg from '../../assets/img/empty-cart.png';

const Empty = () => {
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>Корзина пустая 😕</h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.<br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={EmptyCartImg} alt="Empty cart" />
        <Link className="button button--black" to="/">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};

export default Empty;
