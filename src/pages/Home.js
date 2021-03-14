import React, { useEffect } from 'react';
import { Categories, Sort, Card, PlaceHolderCard } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sorts = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' }
];

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)

    useEffect(() => {
        if (!items.length) {
            dispatch(fetchPizzas());
        }
    }, []);

    const handleCategoryClick = (index) => {
        dispatch(setCategory(index));
    }

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories
                        items={categories}
                        onClickItem={handleCategoryClick}
                    />
                    <Sort items={sorts} />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoaded ? items.map(pizza =>
                        <Card
                            key={pizza.id}
                            {...pizza}
                        />
                    ) : Array(8).fill(<PlaceHolderCard />)}
                </div>
            </div>
        </div>
    );
}

export default Home;
