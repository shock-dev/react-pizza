import React, { useState } from 'react';
import classNames from 'classnames';

const Categories = ({ items, onClickItem }) => {
    const [categoryActive, setCategoryActive] = useState(null);

    const onSelectItem = (index) => {
        setCategoryActive(index);
        onClickItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li
                    className={classNames({'active': categoryActive === null})}
                    onClick={onSelectItem.bind(null, null)}
                >
                    Все
                </li>
                {items &&
                    items.map((category, index) =>
                        <li
                            key={index}
                            className={classNames({'active': index === categoryActive})}
                            onClick={onSelectItem.bind(null, index)}
                        >
                            {category}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Categories;
