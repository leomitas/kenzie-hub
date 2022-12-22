import styled, {css} from "styled-components";

export const FormRegister = styled.form`
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

export const ButtonRegister = styled.button`
    background-color: var(--color-primary);
    margin: 0 18px;
    padding: 8px 0;
    width: 100%;
    border-radius: 4px;
`