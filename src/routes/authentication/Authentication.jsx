import './Authentication.styles.scss'

import SignInForm from '../../components/signInForm/SignInForm';
import SignUpForm from '../../components/signUpForm/SignUpForm'


// const fetchRedirectResult = async ()=>{
//     try {
//         const response = await getRedirectResult(auth)
//         if(response){
//             createUserDocumentFromAuth(response.user)
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

const Authentication = ()=>{
    
    return (
        <div className='authentication-container'>
            <SignInForm></SignInForm>
            <SignUpForm />
        </div>
    );
}

export default Authentication;