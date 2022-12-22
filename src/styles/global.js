import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;
    --color-sucess: #3FE864;
    --color-negative: #E83F5B;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body {
        overflow-x: hidden;
        background-color: var(--color-grey-4);
    }

    button {
        cursor: pointer;
        border: 0;
        background-color: transparent;
    }

    ul, ol, li {
        list-style: none;
    }

    section, aside, div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

`