import styled from "styled-components";
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)` 
    background-color: var(--color-grey-2);
    border-radius: 4px;
`

export const ColorGrey1 = styled.p`
    color: var(--color-grey-1);
    font-size: 10px;
    line-height: 18px;
    font-weight: 400;
`

export const ColorGrey0 = styled.p`
    color: var(--color-grey-0);
`

export const RegisterButton = styled.button`
    color: var(--color-grey-0);
    margin: 0;
    padding: 8px 16px;
    border-radius: 4px;
`

export const RegisterDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: auto;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 80%;
    max-width: 369px;
`

export const Img = styled.img`
    width: max-content;
    margin: 0;
`

export const Container =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    background-color: var(--color-grey-3);
    padding: 34px 18px;
    border-radius: 4px;
    width: 100%;
`

export const RegisterHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`