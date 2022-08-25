import React from 'react';

import './form-input.styles.scss';

const FormInput = () => (
    <div className='group'>
        <input className='form-input' />
        
            <label
                // className={`${
                //     otherProps.value.length ? 'shrink' : ''
                //     } form-input-label`}
            >
                label
            </label>
       
    </div>
);

export default FormInput;