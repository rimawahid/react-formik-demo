import { Formik ,Form, Field, ErrorMessage} from 'formik';
import React from 'react';
// import { useFormik } from 'formik';
import* as Yup from 'yup'
const initialValues = {
    name:'',
    email:'',
    channel:'',
}

const onSubmit = values => {
    console.log('Form values', values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
})

const Youtube = () => {
    // Reducing boilerplate
    // Formik components 1.Formik 2.Form 3.Field 4.ErrorMessage

    // const formik = useFormik({
    //     initialValues, 
    //     onSubmit,
    //     validationSchema
    // })
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field 
                        type='text' 
                        id='name' 
                        name='name' 
                    />
                    <ErrorMessage name='name'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <Field 
                        type='email' 
                        id='email' 
                        name='email'                        
                    />
                    <ErrorMessage name='email'/>                 
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field 
                        type='text' 
                        id='channel' 
                        name='channel'                       
                    />
                    <ErrorMessage name='channel'/>                
                </div>

                <button type='submit'>Submit</button>

            </Form>
        </Formik>
    );
};

export default Youtube;