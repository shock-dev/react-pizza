import { FC } from 'react';
import classNames from 'classnames';

type ButtonTypes = {
    onClick: any,
    className: string,
    outline: boolean,
    children: any
}

const Button: FC<ButtonTypes> = ({ onClick, className, outline, children }) => {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline': outline,
            })}>
            {children}
        </button>
    );
};

export default Button;
