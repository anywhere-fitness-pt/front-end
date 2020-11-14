import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({

    fname: yup.string().required("Please enter your first name."),

    lname: yup.string().required("Please enter your last name."),

    email: yup.string().email("Must enter a valid email address.").required("An e-mail address is required."),

    Pswd1: yup.string().min(6, 'Passwords must be at least 6 chatracters long.').required("Please enter a password."),

    Pswd2: yup.string().equals({Pswd1}).required('Re-enter password.')

});

const initialInstValues = {

    instfname: '',
    instlname: '',
    instAuth: '',
    instemail: '',
    instpswd1: '',
}

const initialInst = [];
const initialDisabled = true;

const CreateInstructor = () => {

    const [instructor, newInstructor] = useState(initialInst);
    const [instValues, setInstValues] = useState(initialInstValues);
    const [errors, setErrors] = useState(initialInstValues);
    const [disabled, setDisabled] = useState(initialDisabled);

    const postInst = (newInst) => {

        Axios.post('', newInst)

        .then((res) => {
            newInstructor([res.data, ...instructor])
        })

        .catch((err) => {
            alert('Are you sure you are an instructor?', err)
        })

        .finally(() => {
            setInstValues(initialInstValues)
        })
    
    }

    const onInputChange = (e) => {

        const {name, value} = e.target;
  
        yup.reach(formSchema, name)
        .validate(value)
        .then(() => {
          setErrors({...errors, [name]: ''})
        })
        .catch((err) => {
          setErrors({...errors, [name]: err.errors[0]})
        })
      setInstValues({...instValues, [name]: value})
      }      
  
      const onSubmit = (e) => {
        e.preventDefault()
    
        const newInst = {
            instfname: instValues.instfname.trim(),
            instlname: instValues.instlname.trim(),
            instAuth: instValues.instAuth.trim(),
            instemail: instValues.instemail.trim(),
            instpswd1: instValues.instpswd1.trim(),
        }
    
        postInst(newInst);

      }
    
      useEffect(() => {
        formSchema.isValid(instValues).then(valid => {
          setDisabled(!valid);
        })
      }, [instValues])

    return (

        <Form onSubmit={onSubmit}>

            <h1>Welcome to Anywhere Fitness!</h1>
            <p>Please fill out the form below to register as a new instructor</p>

            <label htmlFor='instfname'>
                Please enter your first name:
                <input 
                    id='instfname' 
                    name='instfname' 
                    type='text' 
                    value={value.instfname} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='instlname'>
                Please enter your last name:
                <input 
                    id='instlname' 
                    name='instlname' 
                    type='text' 
                    value={value.instlname} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='instAuth'>
                Please enter the authorization code provided to you by administration:
                <input
                    id='instAuth' 
                    name='instAuth' 
                    type='text' 
                    value={value.instAuth}
                    onChange={onInputChange} 
                />
            </label>
            <label htmlFor='instemail'>
                E-mail:
            </label>
            <input
                id='instemail'
                name='instemail'
                type='email'
                placeholder='Please enter your e-mail address.'
                value={values.instemail}
                onChange={onChangeInput}
                 />
            <label htmlFor='instpswd1'>
                Password:
            </label>
            <input
                id='instpswd1'
                name='instpswd1'
                type='password'
                placeholder='******'
                minLength='6'
                value={values.instpswd1}
                onChange={onInputChange}
                 />
            <label htmlFor='instpswd2'>
                Confirm Password:
            </label>
            <input
                id='instpswd2'
                name='instpswd2'
                type='password'
                placeholder='******'
                minLength='6'
                 />

            <button>Submit Form</button>
            <p>Already a registered instructor?<button>Login</button></p>

        </Form>


    )

}

export default CreateInstructor