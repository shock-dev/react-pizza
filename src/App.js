import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

const App = () => {
  return (
      <Router>
          <div className="wrapper">
              <Header />
              <div className="content">
                  <Switch>
                      <Route path="/" component={Home} exact />
                      <Route path="/cart" component={Cart} exact />
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;
