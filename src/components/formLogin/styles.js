import styled, {css} from "styled-components";

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    button {
        color: var(--color-grey-0);
    }
`

export const ButtonLogin = styled.button`
    background-color: var(--color-primary);
    margin: 0 18px;
    padding: 10px 0;
    width: 100%;
    border-radius: 4px;
`