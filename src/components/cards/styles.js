import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    margin: 0 auto;
`

export const DivTech = styled.div`
    padding: 26px 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const H2 = styled.h2`
    color: var(--color-grey-0);
    font-weight: 600;
    font-size: 16px;
`

export const Button = styled.button`
    color: var(--color-grey-0);
    background-color: var(--color-grey-3);
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
`

export const Ul = styled.ul`
    background-color: var(--color-grey-3);
    padding: 22px 8.5px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 95%;
    @media (min-width: 400px) {
        margin: 0;
        width: 100%;
    }
`

export const Li = styled.li`
    color: var(--color-grey-0);
    font-weight: 700;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding: 13px 22px;
    font-weight: 700;
    font-size: 14px;
    background-color: var(--color-grey-4);
    border-radius: 4px;
`

export const P = styled.p`
    color: var(--color-grey-1);
    font-weight: 400;
    font-size: 12px;
`