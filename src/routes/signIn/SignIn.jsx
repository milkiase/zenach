import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils'

const SignIn = ()=>{
    const logGoogleUserWithPopup = async()=>{
        try {
            const response = await signInWithGooglePopup()
            console.log('popup', response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Sign in page</h1>
            <button type="button" onClick={logGoogleUserWithPopup}>Sign in With Google <strong>Popup</strong></button>
            </div>
    );
}

export default SignIn;