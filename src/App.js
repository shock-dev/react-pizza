import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components';
import { Cart, Home } from './pages';
import { fetchPizzas } from './redux/actions/pizzas';

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
                    <Route path="/" component={Home} exact />
                    <Route path="/cart" component={Cart} exact />
                </Switch>
            </div>
        </div>
    )
}

export default App;
