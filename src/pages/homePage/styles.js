import styled from 'styled-components'
import { Link as LinkRoutes } from 'react-router-dom'

export const Header = styled.header`
    padding: 17px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (min-width: 700px) {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
    }
`

export const Img = styled.img`
    width: max-content;
    margin: 0;
`

export const Link = styled(LinkRoutes)`
    background-color: var(--color-grey-3);
    border-radius: 4px;
    padding: 0 1rem;
`

export const Button = styled.button`
    color: var(--color-grey-0);
    height: 2rem;
`

export const Border = styled.div`
    width: 100vw;
    border-top: 1px solid var(--color-grey-3);
    border-bottom: 1px solid var(--color-grey-3);
`

export const Section = styled.section`
    width: 100%;
    padding: 35px 12px;
    display: flex;
    flex-direction: column; 
    gap: 10px;
    @media (min-width: 400px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        max-width: 1000px;
        margin: 0 auto;
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    @media (min-width: 400px) {
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
    }
`

export const H2 = styled.h2`
    color: var(--color-grey-0);
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 28px;
`

export const P = styled.p`
    color: var(--color-grey-1);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`