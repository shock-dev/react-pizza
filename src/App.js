import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

// Components
import Header from './components/Header';

// Pages
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';

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
