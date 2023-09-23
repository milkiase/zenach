import { InputHTMLAttributes } from 'react';
import { Group, Input, FormInputLabel} from './FormInput.styles'

type TFormInputProps = {
    label: string
} & InputHTMLAttributes<HTMLInputElement>

const FormInput = ({label, ...otherProps}:TFormInputProps)=>{
    return (
        <Group>
            <Input {...otherProps} />
            {
                label && <FormInputLabel htmlFor={otherProps.id} shrink={
                    Boolean(otherProps.value && typeof(otherProps.value) === 'string' && otherProps.value.length)
                    }>
                    {label}
                </FormInputLabel>
            }
        </Group>
    )
}

export default FormInput;