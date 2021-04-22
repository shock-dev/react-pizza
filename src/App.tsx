import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { fetchPizzas } from './store/pizzas/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route
            path="/"
            component={Home}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
