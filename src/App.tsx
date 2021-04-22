import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
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
