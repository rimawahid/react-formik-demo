import React from 'react';
import {Formik , Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './reusableFormikControls/FormikControl'


const EnrollmentForm = () => {

    const couresOptions = [
        {key: 'Select an option', values: ''},
        {key: 'React', values: 'react'},
        {key: 'Angular', values: 'angular'},
        {key: 'Vue', values: 'vue'},
    ]

    const checkboxOptions = [
        {key: 'HTML', value: 'html'},
        {key: 'CSS', value: 'css'},
        {key: 'JavaScript', value: 'javascript'},
    ]


    const initialValues = {
        email:'',
        bio:'',
        course:'',
        skills:[],
        courseDate:null
    }

    const validationSchema= Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        bio: Yup.string().required('Required'),
        course:Yup.string().required("Required"),
        courseDate: Yup.date().required('Required').nullable()
    })

    const onSubmit = values => {
        console.log("From data", values)
    }
    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik =>{
                    return(
                        <Form>
                            <FormikControl
                                control='input'
                                type='email'
                                label='Email'
                                name='email'
                            />
                            <FormikControl
                                control='textarea'
                                type='bio'
                                label='Bio'
                                name='bio'
                            />
                            <FormikControl
                                control='select'
                                label='Course'
                                name='course'
                                options={couresOptions}
                            />
                            <FormikControl
                                control='checkbox'
                                label='Your skills'
                                name='skills'
                                options={checkboxOptions}
                            />
                            <FormikControl
                                control='date'
                                label='Course date'
                                name='courseDate'
                            />
                            
                            <button type='submit' disabled={!formik.isValid}>Submit</button>

                        </Form>
                    )
                }
            }
            
        </Formik>
    );
};

export default EnrollmentForm;