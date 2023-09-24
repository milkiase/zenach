import styled from 'styled-components'

type TDirectoryItemComponentProps = {
    imageurl: string
}
export const DirectoryItemComponent = styled.div<TDirectoryItemComponentProps>`
    border-style: solid;
    border-width: 1px;
    min-width: 22rem;
    min-height: 45vh;
    flex: 1 1 auto;
    display: flex;
    text-align: center;
    position: relative;
    background-size: cover;
    background-image: ${({imageurl})=> (`url(${imageurl})`)};
    &:hover{
        background-size: 110%;
    }
`

export const DirectoryBody = styled.div`
    border-style: solid;
    border-width: 1px;
    width: 8.5rem;
    margin: auto;
    text-align: center;
    text-transform: uppercase;
    background-color: whitesmoke;
    opacity: 0.6;
    &:hover{
    opacity: 0.8;
    cursor: pointer;
    }
`
