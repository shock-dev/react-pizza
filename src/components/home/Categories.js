import { useState } from 'react';
import classNames from 'classnames';

const Categories = () => {
    const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const [categoryActive, setCategoryActive] = useState(null);

    return (
        <div className="categories">
            <ul>
                <li
                    className={classNames({'active': categoryActive === null})}
                    onClick={setCategoryActive.bind(null, null)}
                >
                    Все
                </li>
                {categories.map((category, index) =>
                    <li
                        key={index}
                        className={classNames({'active': index === categoryActive})}
                        onClick={setCategoryActive.bind(null, index)}
                    >
                        {category}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Categories;
