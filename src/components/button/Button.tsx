import {BaseButton, GoogleButton, InvertedButton, DotSpinner, DotSpinnerDot} from './Button.styles'
import { FC, ButtonHTMLAttributes} from 'react'
export enum BUTTON_TYPE_CLASSES  {
    base = 'base',
    inverted = 'inverted',
    google = 'google-sign-in'
}
type TGetButton =
    typeof BaseButton |
    typeof GoogleButton |
    typeof InvertedButton
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): TGetButton=>
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleButton
   }[buttonType]);

export type TButtonProps = {
    buttonType ?: BUTTON_TYPE_CLASSES,
    isLoading ?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<TButtonProps> = ({children, buttonType, isLoading, ...otherProps})=>{
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