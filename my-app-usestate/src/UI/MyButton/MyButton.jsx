import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button
            {...props}
            className={`ui-element ${classes.my_btn}`}>
            {children}
        </button>
    );
};

export default MyButton;