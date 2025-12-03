// src/styles.ts
import { createGlobalStyle } from "styled-components";

export const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px',
}

export const colors = {
    // Azul Profundo, Forte e Confiável (Substitui o primary)
    primary: '#0038d8', 
    // Tom de Azul mais claro para 'call to action' ou hover (Contraste e Ação)
    secondary: '#0054ff', 
    // Cor de Fundo Limpa para foco no conteúdo
    background: '#f8f8ff', // Levemente fora do branco puro
    // Cor do Texto principal (Alto contraste para legibilidade)
    text: '#222222', 
    // Cor de Borda, Linhas, ou Texto Secundário (Suavidade)
    lightGray: '#aaaaaa', 
    // Branco para Fundo de Componentes ou Texto em Cima de Cores Escuras
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

    body {
        background-color: ${colors.background};
        color: ${colors.text};
        scroll-behavior: smooth;
        line-height: 1.6;
    }
`