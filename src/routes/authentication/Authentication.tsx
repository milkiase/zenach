import {AuthenticationComponent} from './Authentication.styles'

import SignInForm from '../../components/signInForm/SignInForm';
import SignUpForm from '../../components/signUpForm/SignUpForm';

const Authentication = ()=>{
    
    return (
        <AuthenticationComponent>
            <SignInForm></SignInForm>
            <SignUpForm />
        </AuthenticationComponent>
    );
}

export default Authentication;