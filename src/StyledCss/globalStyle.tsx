import { createGlobalStyle } from 'styled-components';

export const AppStyle = createGlobalStyle<{ Color: string }>`
    body{
        height:100vh;
        background: ${props => props.Color};
    }
`