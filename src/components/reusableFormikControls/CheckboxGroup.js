import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from '../TextError';

const CheckboxGroup = (props) => {
    const {label, name, options, ...rest} = props

    return (
        <div className='form-control'>
            <label >{label}</label>
          
            <Field className='test' name={name} {...rest}>
             {
                ({field}) => {
                    return options.map (option =>{
                        return (
                            <div className='radio' key={option.key}>
                                <input 
                                    type='checkbox' 
                                    id={option.value}
                                    {...field}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                    />
                                    <label  htmlFor={option.value}>{option.key}</label>
                            </div>
                        )
                    })
                }
             }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default CheckboxGroup;