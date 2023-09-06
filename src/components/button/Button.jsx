import {BaseButton, GoogleButton, InvertedButton, DotSpinner, DotSpinnerDot} from './Button.styles'

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    inverted: 'inverted',
    google: 'google-sign-in'
}

const getButton = (buttonType = 'base')=>(
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleButton
    }[buttonType]
)
const Button = ({children, buttonType, isLoading, ...otherProps})=>{
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? 
            <DotSpinner>
                <DotSpinnerDot/>
                <DotSpinnerDot/>
                <DotSpinnerDot/>
                <DotSpinnerDot/>
                <DotSpinnerDot/>
                <DotSpinnerDot/>
                <DotSpinnerDot/>
                <DotSpinnerDot/>
            </DotSpinner> : children}
        </CustomButton>
        
    );
}

export default Button;