import React from 'react';
import classNames from 'classnames';
import { CategoryType } from '../store/filters/types';

interface CategoriesProps {
  items: string[]
  active: CategoryType
  clickItemHandler: (val: CategoryType) => void
}

const Categories = ({ items, active, clickItemHandler }: CategoriesProps) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={classNames({ active: active === null })}
          onClick={clickItemHandler.bind(null, null)}
        >
          Все
        </li>
        {items.map((category, index) =>
          <li
            key={index}
            className={classNames({ active: active === index })}
            onClick={clickItemHandler.bind(null, index)}
          >
            {category}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Categories;
