import { useState } from 'react';
import './SignUpForm.styles.scss'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../formInput/FormInput';
import Button from '../button/Button'
const defualtFormFields = {
    displayName : '',
    email : '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = ()=>{
    const [formFields, setFormFields] = useState(defualtFormFields)
    const {displayName, email, password, confirmPassword} = formFields
    const handleFormChange = (event)=>{
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }
    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert('passwords do not match')
            return
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth({...user, displayName})
            alert('user has been created successfully!')
            setFormFields(defualtFormFields)
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('could not create user, user already exists')
            }else{
                console.error(error.message)
            }
        }
        // console.log(user)
    }
    return (
        <div className='sign-up-container'>
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
                <div className='sign-up-btn-container'>
                    <Button  type="submit">Sign Up</Button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;