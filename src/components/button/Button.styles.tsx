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

const uibConst = css`
    --uib-size: 2.8rem;
    --uib-speed: .9s;
    --uib-color: #183153;
`

export const DotSpinnerDot = styled.div`
    ${uibConst};
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    &::before {
        content: '';
        height: 20%;
        width: 20%;
        border-radius: 50%;
        background-color: var(--uib-color);
        transform: scale(0);
        opacity: 0.5;
        animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
        box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
    }
    @keyframes pulse0112 {
    0%,
    100% {
        transform: scale(0);
        opacity: 0.5;
    }

    50% {
        transform: scale(1);
        opacity: 1;
    }
    }
`

export const DotSpinner = styled.div`
    ${uibConst};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: var(--uib-size);
    width: var(--uib-size);

    ${DotSpinnerDot}:nth-child(2) {
    transform: rotate(45deg);
    }

    ${DotSpinnerDot}:nth-child(2)::before {
    animation-delay: calc(var(--uib-speed) * -0.875);
    }

    ${DotSpinnerDot}:nth-child(3) {
    transform: rotate(90deg);
    }

    ${DotSpinnerDot}:nth-child(3)::before {
    animation-delay: calc(var(--uib-speed) * -0.75);
    }

    ${DotSpinnerDot}:nth-child(4) {
    transform: rotate(135deg);
    }

    ${DotSpinnerDot}:nth-child(4)::before {
    animation-delay: calc(var(--uib-speed) * -0.625);
    }

    ${DotSpinnerDot}:nth-child(5) {
    transform: rotate(180deg);
    }

    ${DotSpinnerDot}:nth-child(5)::before {
    animation-delay: calc(var(--uib-speed) * -0.5);
    }

    ${DotSpinnerDot}:nth-child(6) {
    transform: rotate(225deg);
    }

    ${DotSpinnerDot}:nth-child(6)::before {
    animation-delay: calc(var(--uib-speed) * -0.375);
    }

    ${DotSpinnerDot}:nth-child(7) {
    transform: rotate(270deg);
    }

    ${DotSpinnerDot}:nth-child(7)::before {
    animation-delay: calc(var(--uib-speed) * -0.25);
    }

    ${DotSpinnerDot}:nth-child(8) {
    transform: rotate(315deg);
    }

    ${DotSpinnerDot}:nth-child(8)::before {
    animation-delay: calc(var(--uib-speed) * -0.125);
    }

`
