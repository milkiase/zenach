import { Group, Input, FormInputLabel} from './FormInput.styles'
const FormInput = ({label, ...otherProps})=>{
    return (
        <Group>
            <Input {...otherProps} />
            {
                label && <FormInputLabel htmlFor={otherProps.id} shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            }
        </Group>
        // <div className='group'>
        //     <input className='form-input' {...otherProps}/>
        //     {
        //         label && <label htmlFor={otherProps.id} className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
        //     }
        // </div>
    )
}

export default FormInput;