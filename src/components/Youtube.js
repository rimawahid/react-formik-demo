import { Formik ,Form, Field, ErrorMessage, FieldArray} from 'formik';
import React from 'react';
// import { useFormik } from 'formik';
import* as Yup from 'yup'
import TextError from './TextError';
const initialValues = {
    name:'',
    email:'',
    channel:'',
    Comments: '',
    address: '',
    social:{
        facebook: '',
        twitter:''
    },
    phones:['', ''],
    phoneNumbers:['']
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
            validateOnChange= {false}
            >
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field 
                        type='text' 
                        id='name' 
                        name='name' 
                    />
                    <ErrorMessage name='name' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <Field 
                        type='email' 
                        id='email' 
                        name='email'                        
                    />
                    <ErrorMessage name='email'> 
                        {
                           errorMsg => <div className='error'>{errorMsg}</div>
                        }
                     </ErrorMessage>               
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field 
                        type='text' 
                        id='channel' 
                        name='channel' 
                        placeholder= 'Youtube channel name'                      
                    />
                    <ErrorMessage name='channel' />                
                </div>

                <div  className='form-control'>
                    <label htmlFor='comments'>Comments</label>
                    {/* <Field component='textarea' id='comments' name='comments'/> */}
                    <Field as='textarea' id='comments' name='comments'/>
                </div>

                <div  className='form-control'>
                    <label htmlFor='address'>Address</label>
                    <Field name='address'>
                        {
                            (props) => {
                                const {field, form, meta} = props
                                console.log('Render props',props)
                                return (
                                     <div>
                                        <input type='text' id='address' {... field} />
                                        {
                                            meta.touched && meta.error ? <div>{meta.error}</div> : null
                                        }
                                    </div>
                                )
                            }
                        }
                    </Field>
                </div>

                <div className='form-control'>
                    <label htmlFor='facebook'>Facebook profile</label>
                    <Field type='text' id='facebook' name='social.facebook'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='twitter'>Twitter profile</label>
                    <Field type='text' id='twitter' name='social.twitter'/>
                </div>

                
                <div className='form-control'>
                    <label htmlFor='primaryPh'>Primary phone numbers</label>
                    <Field type='text' id='primaryPh' name='phones[0]'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='secondaryPh'>Secondary phone numbers</label>
                    <Field type='text' id='secondaryPh' name='phones[1]'/>
                </div>


                <div className='form-control'>
                    <label htmlFor='secondaryPh'>List of phone numbers</label>
                    <FieldArray name='phoneNumbers'>
                        {
                            (fieldArrayProps)=>{
                                console.log('fieldArrayProps', fieldArrayProps)
                            const {push, remove, form}= fieldArrayProps
                            const {values} = form
                            const {phoneNumbers} = values
                                return (
                                    <div>
                                        {phoneNumbers.map((phoneNumber, index) => (
                                            <div key={index}>
                                                <Field name={`phoneNumbers[${index}]`}/>
                                                {index > 0 && (
                                                <button type='button' onClick={() => remove(index)}>
                                                    {' '}
                                                    -{' '}
                                                </button>
                                                    
                                                )}
                                                <button type='button' onClick={() => push('')}>
                                                    {' '}
                                                    +{' '}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                        }
                    </FieldArray>
                </div>




                <button type='submit'>Submit</button>

            </Form>
        </Formik>
    );
};

export default Youtube;