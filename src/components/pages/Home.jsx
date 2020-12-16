import React from 'react'
import { Categories, SortPopup, Product } from "../index";

function Home({items}) {
    return (
        <div className="container">
                <div className="content__top">

                    <Categories items={[
                        'Мясные',
                        'Вегетарианская',
                        'Гриль',
                        'Острые',
                        'Закрытые'
                    ]}/>

                    <SortPopup items={[
                        {name: 'популярности', type: 'popular'},
                        {name: 'цене', type: 'price'},
                        {name: 'алфавиту', type: 'alphabet'}
                    ]}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        items.map(item => (
                            <Product
                                key={item.id}
                                {...item}
                            />
                        ))
                    }
                </div>
            </div>
    )
}

export default Home
