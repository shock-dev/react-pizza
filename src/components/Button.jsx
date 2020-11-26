import React from 'react';
import classNames from 'classnames';

function Button({ className, children, outline }) {
    let classes = classNames('button', className, {'button--outline': outline})

    return (
        <button className={classes}>{ children }</button>
    )
}

export default Button;
