import React, { useEffect, useState } from 'react';
import Categories from '../components/home/Categories';
import Sort from '../components/home/Sort';
import Card from '../components/home/Card';
import axios from 'axios';
import { Pizza } from '../types/pizza';

const Home: React.FC = () => {
    const [pizzas, setPizzas] = useState<Pizza[]>([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/pizzas')
            .then(({data}) => setPizzas(data));
    }, []);



    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {pizzas.map(pizza =>
                        <Card
                            key={pizza.id}
                            {...pizza}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;
