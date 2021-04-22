import React, { useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/Card';

import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, selectSortBy } from '../store/filters/selectors';
import { CategoryType, SortByType } from '../store/filters/types';
import { setCategory, setSortBy } from '../store/filters/actions';

import categories from '../resources/categories';
import sorts from '../resources/sorts';

const Home = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(selectCategory);
  const activeSortObj = useSelector(selectSortBy);

  useEffect(() => {
    document.title = 'React pizza - Home page';
  }, []);

  const clickCategoryHandler = (val: CategoryType): void => {
    if (val !== activeCategory) {
      dispatch(setCategory(val));
    }
  };

  const clickSortByHandler = (sortObj: SortByType): void => {
    if (sortObj.type !== activeSortObj.type) {
      dispatch(setSortBy(sortObj));
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
          <Sort
            items={sorts}
            active={activeSortObj}
            clickItemHandler={clickSortByHandler}
          />
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
