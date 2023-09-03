import {useDispatch} from 'react-redux';
import { signInWithGoogleAction, signInWithEmailInitAction } from '../../store/user/user.actions';
import {SignInFormComponent, Buttons} from './SignInForm.styles'
import Button, {BUTTON_TYPE_CLASSES} from '../button/Button';
import FormInput from '../formInput/FormInput';


import { useState } from 'react';
// import { RedirectFunction } from 'react-router-dom';
const DEFAULT_SIGN_IN_FIELDS ={
    email: '',
    password: ''
}
const SignInForm = ()=>{
    const dispatch = useDispatch()
    const [signInFormFields, setSignInFormFields] = useState(DEFAULT_SIGN_IN_FIELDS)
    const {email, password} = signInFormFields
    const handleFormChange = (event)=>{
        const {name, value} = event.target
        setSignInFormFields({...signInFormFields, [name]: value})
    }
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        try{
            dispatch(signInWithEmailInitAction(email, password))
            setSignInFormFields(DEFAULT_SIGN_IN_FIELDS)
        }catch(error){
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email.')
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break
                default:
                    console.error(error)
                    break;
            }
        }
    }
    const logGoogleUserWithPopup = ()=>{
        dispatch(signInWithGoogleAction())
    }
    return (
        <SignInFormComponent>
            <h3>Already have an account ?</h3>
            <p>Sign in with your email and password</p>
            <form onSubmit={handleFormSubmit}>
                <FormInput label={'Email'} value={email} onChange={handleFormChange} 
                    type='email' name='email' id='sign-in-email' required/>
                <FormInput label={'Password'} value={password} onChange={handleFormChange} 
                    type='password' name='password' id='sign-in-password' required autoComplete="true"/>
                <Buttons>
                    <Button type='submit'> Sign in</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} 
                        onClick={logGoogleUserWithPopup}>Sign in With Google 
                    </Button>
                </Buttons>
            </form>
        </SignInFormComponent>
        
    );
}

export default SignInForm;