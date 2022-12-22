import styled from "styled-components";

export const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.25); //--color-overlay-black
`

export const DivModal = styled.div`
    background-color: var(--color-grey-3);
    max-width: 369px;
    width: 95%;
    margin: 0 auto;
    
    div:first-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 12px 20px;
        background-color: var(--color-grey-2);
        h2 {
            font-size: 14px;
            font-weight: 700;
            line-height: 24px;
            color: var(--color-grey-0);
        }
        button {
            font-size: 13px;
            font-weight: 600;
            line-height: 21px;
            color: var(--color-grey-1);
        }
    }

    form {
        padding: 15px 17px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        width: 100%;
        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        button {
            color: var(--color-grey-0);
            font-size: 13px;
            font-weight: 500;
            line-height: 21px;
            padding: 0 22px;
            background-color: var(--color-primary-negative);
            height: 38.5px;
            border-radius: 4px;
        }
        button:last-child {
            background-color: var(--color-grey-1);
        }
    }
`