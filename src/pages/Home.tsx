import React, { useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card, { CartPrepareData } from '../components/Card';

import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, selectSortBy } from '../store/filters/selectors';
import { CategoryType, SortByType } from '../store/filters/types';
import { setCategory, setSortBy } from '../store/filters/actions';

import categories from '../resources/categories';
import sorts from '../resources/sorts';
import { selectPizzas, selectPizzasLoading, selectPizzasSuccess } from '../store/pizzas/selectors';
import Skeleton from '../components/Card/Skeleton';
import { ICartItem } from '../store/cart/types';
import { selectCartItems } from '../store/cart/selectors';
import { plusCartItem, setCartItem } from '../store/cart/actions';

const Home = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(selectCategory);
  const activeSortObj = useSelector(selectSortBy);
  const pizzas = useSelector(selectPizzas);
  const isLoading = useSelector(selectPizzasLoading);
  const isSuccess = useSelector(selectPizzasSuccess);
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    document.title = 'React pizza - Главная';
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

  const clickPizzaHandler = (item: CartPrepareData, id: number) => {
    const findItemById = cartItems.find((item: ICartItem) => item.id === id);

    if (findItemById) {
      dispatch(plusCartItem(id));
    } else {
      const prepareCartItem: ICartItem = { id, count: 1, ...item };
      dispatch(setCartItem(prepareCartItem));
    }
  };

  const findCountById = (id: number): number => {
    const foundItem = cartItems.find((item: ICartItem) => item.id === id);

    if (!foundItem) {
      return 0;
    }

    return foundItem.count;
  };

  let output: any = false;

  if (isLoading) {
    output = new Array(6).fill(0).map((item, index) => <Skeleton key={index} />);
  }

  if (isSuccess) {
    output = pizzas.map((pizza) =>
      <Card
        key={pizza.id}
        name={pizza.name}
        imageUrl={pizza.imageUrl}
        types={pizza.types}
        sizes={pizza.sizes}
        price={pizza.price}
        count={findCountById(pizza.id)}
        addPizzaHandler={(item) => clickPizzaHandler(item, pizza.id)}
      />
    );
  }

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
          {output}
        </div>
      </div>
    </div>
  );
};

export default Home;
