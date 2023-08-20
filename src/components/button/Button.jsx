import './Button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    inverted: 'inverted',
    google: 'google-sign-in'
}

const Button = ({children, buttonType, ...otherProps})=>{
    return (
        <button className={`${BUTTON_TYPE_CLASSES[buttonType]} button-container`} {...otherProps}>
            {children}
        </button>
    );
}

export default Button;