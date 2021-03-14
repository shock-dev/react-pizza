import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components';
import { Cart, Home } from './pages';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/cart" component={Cart} exact />
                </Switch>
            </div>
        </div>
    )
}

export default App;
