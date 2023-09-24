import styled from 'styled-components'

export const SpinnerItem = styled.div`
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: rgb(38, 175, 220);
    border-radius: 50%;
    animation: spinner-4t3wzl 2s infinite linear;
    @keyframes spinner-4t3wzl {
        0% {
        transform: rotate(0deg) translateX(-100%);
        }
    
        100% {
        transform: rotate(360deg) translateX(-100%);
        }
    }
    
`
export const Spinner = styled.div`
    margin: auto;
    margin-top: 30vh;
    position: relative;
    width: 80px;
    height: 16px;
    ${SpinnerItem}:nth-child(1) {
        left: 0;
        animation-delay: 0.15s;
        opacity: 0.9;
    }
    
    ${SpinnerItem}:nth-child(2) {
        left: 25%;
        animation-delay: 0.3s;
        opacity: 0.8;
    }
    
    ${SpinnerItem}:nth-child(3) {
        left: 50%;
        animation-delay: 0.45s;
        opacity: 0.7;
    }
    
    ${SpinnerItem}:nth-child(4) {
        left: 75%;
        animation-delay: 0.6s;
        opacity: 0.6;
    }
    
    ${SpinnerItem}:nth-child(5) {
        left: 100%;
        animation-delay: 0.75s;
        opacity: 0.5;
    }
`
