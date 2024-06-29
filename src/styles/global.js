import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
    margin:0;
    padding:0;
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    font-variation-settings:
    "wdth" 100;
    }

    body{
        background-color: #13192c;
        color:#FFF;
    }

`