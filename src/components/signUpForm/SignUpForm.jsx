import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { signUpWithEmailInitAction } from '../../store/user/user.actions';
import {SignUpComponent, SignUpButton} from './SignUpForm.styles'
import FormInput from '../formInput/FormInput';
const defualtFormFields = {
    displayName : '',
    email : '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = ()=>{
    const dispatch = useDispatch()
    const [formFields, setFormFields] = useState(defualtFormFields)
    const {displayName, email, password, confirmPassword} = formFields
    const handleFormChange = (event)=>{
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert('passwords do not match')
            return
        }
        try{
            dispatch(signUpWithEmailInitAction(email, password, displayName))
            setFormFields(defualtFormFields)
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('could not create user, user already exists')
            }else{
                console.error(error.message)
            }
        }
    }
    return (
        <SignUpComponent>
            <h3>Don't have an account ?</h3>
            <p>Sign up with your email and password</p>
            <form onSubmit={handleSubmit}> 
                <FormInput label={'Dispaly Name'} type="text" required id='display-name' name='displayName' 
                    value={displayName} onChange={handleFormChange}/>
                <FormInput label={'Email'} type="email" required id='email' name='email' 
                    value={email} onChange={handleFormChange}/>
                <FormInput label={'Password'} type="password" required id='password' name='password' 
                    value={password} onChange={handleFormChange} autoComplete="true"/>
                <FormInput label={'Confirm Password'} type="password" required id='confirm-password' name='confirmPassword' 
                    value={confirmPassword} onChange={handleFormChange} autoComplete="true"/>
                    <SignUpButton  type="submit">Sign Up</SignUpButton>
            </form>
        </SignUpComponent>
    );
}

export default SignUpForm;