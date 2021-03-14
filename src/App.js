import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    Switch,
    Route
} from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get('http://localhost:5000/pizzas')
            .then(({ data }) => {
                dispatch(setPizzas(data));
            });
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
