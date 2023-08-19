import {
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
    createUserDocumentFromAuth,
    auth
} from '../../utils/firebase/firebase.utils'
import { getRedirectResult } from 'firebase/auth'
import { useEffect } from 'react'
import SignUpForm from '../../components/signUpForm/SignUpForm'
import Button from '../../components/button/Button'

const fetchRedirectResult = async ()=>{
    try {
        const response = await getRedirectResult(auth)
        if(response){
            createUserDocumentFromAuth(response.user)
        }
    } catch (error) {
        console.log(error)
    }
}

const SignIn = ()=>{
    useEffect(()=>{
        
        fetchRedirectResult()
    }, [])
    const logGoogleUserWithPopup = async()=>{
        try {
            const {user} = await signInWithGooglePopup()
            console.log(user)
            createUserDocumentFromAuth(user)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Sign in page</h1>
            <Button type="button" buttonType='google' onClick={logGoogleUserWithPopup}>Sign in With Google 
                {/* <strong>Popup</strong> */}
            </Button>
            {/* <br /> */}
            {/* <button type="button" onClick={signInWithGoogleRedirect}>Sign in With Google <strong>Redirect</strong></button> */}
            <SignUpForm />
        </div>
    );
}

export default SignIn;