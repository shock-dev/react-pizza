import { FC } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

// Components
import Header from './components/header/Header';

// Pages
import Home from './pages/Home';
import Cart from './pages/Cart';

const App: FC = () => {
  return (
      <Router>
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
                          exact
                      />
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;
