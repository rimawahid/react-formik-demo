import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';

const FormikContainer = () => {
    const dropdownOptions = [
        {key: 'Select an option', values: ''},
        {key: 'option 1', values: 'option1'},
        {key: 'option 2', values: 'option2'},
        {key: 'option 3', values: 'option3'},
    ]

    const radioOptions = [
        {key: 'option 1', value: 'option1'},
        {key: 'option 2', value: 'option2'},
        {key: 'option 3', value: 'option3'},
    ]

    const checkboxOptions = [
        {key: 'option 1', value: 'coption1'},
        {key: 'option 2', value: 'coption2'},
        {key: 'option 3', value: 'coption3'},
    ]

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate:null

    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required'),
        birthDate: Yup.date().required('Required').nullable()
    })
    const onSubmit = values => {
        console.log("Form data", values)
        console.log('Save data', JSON.parse(JSON.stringify(values)))
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={ validationSchema}
                onSubmit={onSubmit}
            >
                {
                    formik =>(
                      <Form>
                        <FormikControl 
                            control='input' 
                            type='email'
                            label='Email'
                            name='email'
                            />

                            <FormikControl
                                control='textarea'
                                label= 'Description'
                                name='description'
                            />

                            <FormikControl
                                control='select'
                                label= 'Select a topic'
                                name='selectOption'
                                options= {dropdownOptions}
                            />

                            <FormikControl
                                control='radio'
                                label= 'Radio  Topic'
                                name='radioOption'
                                options= {radioOptions}
                            />

                            <FormikControl
                                control='checkbox'
                                label= 'checkbox  Topic'
                                name='checkboxOption'
                                options= {checkboxOptions}
                            />

                            <FormikControl
                                control='date'
                                label= 'Pick a date  Topic'
                                name='birthDate'
                            />
                            


                        <button type='submit'>Submit</button>
                      </Form>  
                    )
                }
            </Formik>
        </div>
    );
};

export default FormikContainer;