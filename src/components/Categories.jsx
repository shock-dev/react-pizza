import React from 'react';

function Categories({ items }) {
    const [activeItem, secActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        secActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onSelectItem(null)}
                    className={activeItem === null ? 'active' : ''}
                >
                    Все
                </li>
                { items &&
                    items.map((item, index) => (
                        <li
                            onClick={() => onSelectItem(index)}
                            className={activeItem === index ? 'active' : ''}
                            key={item + '-' + index}
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;
