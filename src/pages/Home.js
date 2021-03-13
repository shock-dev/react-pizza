import React from 'react';
import { Categories, Sort, Card } from '../components';

const Home = () => {
    const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const sorts = [
        { name: 'популярности', type: 'popular', order: 'desc' },
        { name: 'цене', type: 'price', order: 'desc' },
        { name: 'алфавит', type: 'name', order: 'asc' },
    ];
    const pizzas = [];

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories items={categories} />
                    <Sort items={sorts} />
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
