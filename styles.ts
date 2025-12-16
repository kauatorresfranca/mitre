// src/styles.ts
import { createGlobalStyle } from "styled-components";

export const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px',
}

export const colors = {
    primary: '#0038d8', 
    primaryTransparent: 'rgba(0, 58, 216, 0.2)',
    secondary: '#0054ff', 
    background: '#f8f8ff',
    text: '#222222', 
    lightGray: '#aaaaaa',
    white: '#ffffff', 
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        .container {
            max-width: ${breakpoints.desktop}; /* Usando o breakpoint para ser responsivo */
            width: 90%;
            margin: 0 auto;
        }
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: ${colors.background};
        color: ${colors.text};
        line-height: 1.6;
    }
`