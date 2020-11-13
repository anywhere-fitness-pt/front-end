import Axios from 'axios';
import React, { useState } from 'react';

const initialInstValues = {

    instfname: '',
    instlname: '',
    instemail: '',
    instpswd1: '',
    activity: '',
    time: '',
    duration: '',
    intensity: '',
    loc: '',
    NoU: '',
    maxSize: '',
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
  
      const onCheckboxChange = (e) => {
        const {name, checked} = e.target;
    
        yup
          .reach(formSchema, name)
          .validate(checked)
          .then(() => {
            setErrors({...errors,[name]: ''})
          })
          .catch((err) => {
            setErrors({...errors,[name]:err.errors[0]})
          })
  
          setInstValues({...instValues,[name]:checked})
      }
  
      const onSubmit = (e) => {
        e.preventDefault()
    
        const newInst = {
            instfname: instValues.instfname.trim(),
            instlname: instValues.instlname.trim(),
            instemail: instValues.instemail.trim(),
            instpswd1: instValues.instpswd1.trim(),
          activity: instValues.activity.trim(),
          time: instValues.time.trim(),
          duration: instValues.duration.trim(),
          intensity: instValues.intensity.trim(),
          loc: instValues.loc.trim(),
          NoU: instValues.NoU.trim(),
          maxSize: instValues.maxSize.trim(),
        }
    
        postInst(newInst);
      }
    
      useEffect(() => {
        formSchema.isValid(instValues).then(valid => {
          setDisabled(!valid);
        })
      }, [instValues])

    return (

        <Form>

            <h1>Welcome to Anywhere Fitness!</h1>
            <p>Please fill out the form below to register as a new instructor</p>

            <label htmlFor='instfname'>
                Please enter your full name:
                <input 
                    id='instfname' 
                    name='instfname' 
                    type='text' 
                    value={value.name} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='instlname'>
                Please enter your full name:
                <input 
                    id='instlname' 
                    name='instlname' 
                    type='text' 
                    value={value.name} 
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
            <label htmlFor='inst-pswd1'>
                Password:
            </label>
            <input
                id='inst-pswd1'
                name='inst-pswd1'
                type='password'
                placeholder='******'
                minLength='6'
                value={values.inst-pswd1}
                onChange={onInputChange}
                 />
            <label htmlFor='inst-pswd2'>
                Confirm Password:
            </label>
            <input
                id='inst-pswd2'
                name='inst-pswd2'
                type='password'
                placeholder='******'
                minLength='6'
                 />
            <label htmlFor='activity'>
                What type of activities are you qualified to instruct?
                <input 
                    id='activity' 
                    name='activity' 
                    type='text' 
                    value={value.activity} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='time'>
                Please select the times that you are available.
                <input 
                    id='time' 
                    name='time' 
                    type='' 
                    value={value.time} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='duration'>
                How long will your instruction last for?
                <input 
                    id='duration' 
                    name='duration' 
                    type='' 
                    value={value.duration} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='intensity'>
                Please evaluate the level of intensity for these activities.
                <input 
                    id='intensity' 
                    name='intensity' 
                    type='text' 
                    value={value.intensity} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='loc'>
                From what location will you be giving your instructions?
                <input 
                    id='loc' 
                    name='loc' 
                    type='text' 
                    value={value.loc} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='NoU'>
                <input 
                    id='NoU' 
                    name='NoU' 
                    type='text' 
                    value={value.NoU} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='maxSize'>
                What is the maximum class size you would be willing to instruct?
                <input 
                    id='maxSize' 
                    name='maxSize' 
                    type='text' 
                    value={value.maxSize} 
                    onChange={onInputChange}
                 />
            </label>
            <button>Submit Form</button>

        </Form>


    )

}

export default CreateInstructor