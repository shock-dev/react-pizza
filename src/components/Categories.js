import React from 'react';
import classNames from 'classnames';

const Categories = ({ items, onClickItem,  activeIndex }) => {
    return (
        <div className="categories">
            <ul>
                <li
                    className={classNames({'active': activeIndex === null})}
                    onClick={onClickItem.bind(null, null)}
                >
                    Все
                </li>
                {items &&
                    items.map((category, index) =>
                        <li
                            key={index}
                            className={classNames({'active': index === activeIndex})}
                            onClick={onClickItem.bind(null, index)}
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
