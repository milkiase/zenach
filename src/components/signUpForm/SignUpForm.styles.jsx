import styled from 'styled-components';
import Button from '../button/Button';

export const SignUpComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 380px;
    h3{
        margin: 10px 0;
    }
    p{
        margin: 0;
    }
`

export const SignUpButton = styled(Button)`
    margin-top: 25px;
`

// .sign-up-container{
//     display: flex;
//     flex-direction: column;
//     justify-content: start;
//     width: 380px;
// }

// h3{
//     margin: 10px 0;
// }
// p{
//     margin: 0;
// }

// .sign-up-btn-container{
//     margin-top: 30px;
// }
