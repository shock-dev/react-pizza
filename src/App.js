import React, { useState, useEffect } from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';
import axios from 'axios';

const App = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/pizzas')
            .then(({ data }) => {
                setPizzas(data);
            });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route path="/" render={() => <Home items={pizzas} />} exact />
                    <Route path="/cart" component={Cart} exact />
                </Switch>
            </div>
        </div>
    )
}

export default App;
