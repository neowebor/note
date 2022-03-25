import React from 'react';
import classes from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input
            {...props}
            ref={ref}
            className={`ui-element ${classes.my_inp}`}
            placeholder='Enter note title'/>
    );
});

export default MyInput;