import styled, {css} from 'styled-components';

const MAIN_COLOR = 'black';
const SUB_COLOR = 'grey'
const shrinkLabel = css`
    top: 10px;
    color: ${MAIN_COLOR};
    font-size: 12px;
`

export const Group = styled.div`
    border-bottom: 1px solid ${SUB_COLOR};
    padding: 25px 5px 5px 5px;
    position: relative;
`

export const FormInputLabel = styled.label`
    position: absolute;
    left: 9px;
    ${({shrink})=> (shrink && shrinkLabel) }
`
export const Input = styled.input`
    z-index: -1;
    border: none;
    padding: 5px;
    font-size: 16px;
    font-weight: 100;
    color: $sub-color;
    width: 100%;
    &:focus{
        outline: none;
        background-color: lightgray;
        & ~${FormInputLabel}{
            ${shrinkLabel}
        }
    }
`


// $main-color: black;
// $sub-color: grey;
// @mixin shrinkLabel{
//     top: 10px;
//     color: $main-color;
//     font-size: 12px;
// }
// .group{
//     border-bottom: 1px solid gray;
//     padding: 25px 5px 5px 5px;
//     position: relative;
//     .form-input{
//         z-index: -1;
//         border: none;
//         padding: 5px;
//         font-size: 16px;
//         font-weight: 100;
//         color: $sub-color;
//         width: 100%;
//         &:focus{
//             outline: none;
//             background-color: lightgray;
//             & ~.form-input-label{
//                 @include shrinkLabel();
//             }
//         }
//     }
//     .form-input-label{
//         position: absolute;
//         left: 9px;
//     }
//     .shrink{
//         // position: absolute;
//         @include shrinkLabel()
//     }
// }