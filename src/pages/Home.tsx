import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/Card';
import categories from '../resources/categories';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../store/filters/selectors';
import { CategoryType } from '../store/filters/types';
import { setCategory } from '../store/filters/actions';

const Home = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(selectCategory);

  const clickCategoryHandler = (val: CategoryType): void => {
    if (val !== activeCategory) {
      dispatch(setCategory(val));
    }
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            items={categories}
            active={activeCategory}
            clickItemHandler={clickCategoryHandler}
          />
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
