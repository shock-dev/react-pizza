import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
