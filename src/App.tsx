import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { fetchPizzas } from './store/pizzas/actions';
import { selectCategory, selectSortBy } from './store/filters/selectors';
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  const sortBy = useSelector(selectSortBy);

  useEffect(() => {
    dispatch(fetchPizzas({ category, sortBy }));
  }, [category, sortBy]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route
            path="/"
            component={Home}
            exact
          />
          <Route
            path="/cart"
            component={Cart}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
