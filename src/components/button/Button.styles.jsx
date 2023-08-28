import styled, {css} from 'styled-components';

const whiteBgButton = css`
    border: 1px solid black;
    background-color: white;
    color: black;
`

export const BaseButton = styled.button`
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 0;
    background-color: black;
    color: white;
    cursor: pointer;
    min-width: 150px;
    height: 50px;
    letter-spacing: 0.5px;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    &:hover{
        ${whiteBgButton}
    }
`

export const GoogleButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;
    &:hover{
        border: none;
        background-color: #357ae8;
    }
`

export const InvertedButton = styled(BaseButton)`
    ${whiteBgButton}
    &:hover{
        background-color: black;
        color: white;
        border: none;
    }
`

// @mixin whiteBgButton{
//     border: 1px solid black;
//     background-color: white;
//     color: black;
// }
// .button-container{
//     text-transform: uppercase;
//     padding: 10px 20px;
//     border-radius: 0;
//     background-color: black;
//     color: white;
//     cursor: pointer;
//     min-width: 150px;
//     height: 50px;
//     letter-spacing: 0.5px;
//     // line-height: 50px;
//     font-family: 'Open Sans Condensed';
//     font-weight: bolder;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: none;
//     &:hover{
//         @include whiteBgButton()
//     }
//     &.google-sign-in{
//         background-color: #4285f4;
//         color: white;
//         &:hover{
//             border: none;
//             background-color: #357ae8;
//         }
//     }
//     &.inverted{
//         @include whiteBgButton();
//         &:hover{
//             background-color: black;
//             color: white;
//             border: none;
//         }
//     }
// }