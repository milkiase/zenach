import { useState, ChangeEvent, FormEvent } from 'react';
import {useDispatch} from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { signInWithGoogleAction, signInWithEmailInitAction } from '../../store/user/user.actions';
import Button, {BUTTON_TYPE_CLASSES} from '../button/Button';
import { Buttons, SignInFormComponent } from './SignInForm.styles';
import FormInput from '../formInput/FormInput';


const DEFAULT_SIGN_IN_FIELDS ={
    email: '',
    password: ''
}
const SignInForm = ()=>{
    const dispatch = useDispatch()
    const [signInFormFields, setSignInFormFields] = useState(DEFAULT_SIGN_IN_FIELDS)
    const {email, password} = signInFormFields
    const handleFormChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target
        setSignInFormFields({...signInFormFields, [name]: value})
    }
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        try{
            dispatch(signInWithEmailInitAction(email, password))
            setSignInFormFields(DEFAULT_SIGN_IN_FIELDS)
        }catch(error){
            switch ((error as AuthError).code) {
                case AuthErrorCodes.INVALID_PASSWORD:
                    alert('incorrect password for email.')
                    break;
                case AuthErrorCodes.USER_DELETED:
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