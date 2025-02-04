import React, { useState } from 'react';
import classNames from 'classnames';

export interface CartPrepareData {
  name: string
  imageUrl: string
  price: number
  type: string
  size: number
}

interface CardProps {
  name: string
  imageUrl: string
  types: number[]
  sizes: number[]
  price: number
  count: number
  addPizzaHandler: (item: CartPrepareData) => void
}

const Card = ({
  name,
  imageUrl,
  types,
  sizes,
  price,
  count,
  addPizzaHandler
}: CardProps) => {
  const allTypes = ['тонкое', 'традиционное'];
  const allSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const onClickHandler = () => {
    const item: CartPrepareData = {
      name,
      imageUrl,
      price,
      type: allTypes[activeType],
      size: activeSize
    };
    addPizzaHandler(item);
  };

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt={name}
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {allTypes.map((type, index) =>
            <li
              key={index}
              className={classNames({ active: index === activeType, disabled: !types.includes(index) })}
              onClick={setActiveType.bind(null, index)}
            >
              {type}
            </li>
          )}
        </ul>
        <ul>
          {allSizes.map((size) =>
            <li
              key={size}
              className={classNames({ active: size === activeSize, disabled: !sizes.includes(size) })}
              onClick={setActiveSize.bind(null, size)}
            >
              {size} см.
            </li>
          )}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add" onClick={onClickHandler}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {count > 0 && <i>{count}</i>}
        </div>
      </div>
    </div>
  );
};

export default Card;
