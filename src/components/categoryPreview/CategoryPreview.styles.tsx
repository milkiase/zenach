import styled from 'styled-components'

export const CategoryPreviewComponent = styled.div`
`

export const Title = styled.h1`
    display: flex;
    span{
        cursor: pointer;
    }
`

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5px;
    row-gap: 45px;
    margin-top: 20px;
`