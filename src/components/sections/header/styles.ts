// src/components/Header/styles.ts
import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

// Header Fixo, Moderno e Efeito Glassmorphism (Semi-transparente)
export const Header = styled.header`
    background-color: rgba(255, 255, 255, 0.9); /* Fundo semi-transparente */
    backdrop-filter: blur(8px); /* Efeito de desfoque moderno (Glassmorphism) */
    border-bottom: 1px solid ${colors.lightGray}20; 
    padding: 20px 0; /* Padding ligeiramente menor para visual mais 'sharp' */
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* Sombra mais visível para flutuar */
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        gap: 20px;
    }
`;

// Estilo do Logo (Mantido o destaque no nome)
export const Logo = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.3s ease;

    img {
        height: 36px; /* Levemente maior para destaque */
        margin-right: 8px;
    }

    &:hover {
        opacity: 0.8;
    }
`;

export const LogoText = styled.span`
    font-size: 26px; /* Tamanho maior */
    font-weight: 800; /* Peso da fonte mais ousado */
    color: ${colors.text};
`;

export const LogoSpan = styled.span`
    color: ${colors.primary};
    margin-left: 2px;
    font-weight: 400; /* Peso mais leve para o toque moderno */
`;

// Navegação
export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 36px; /* Espaçamento levemente ajustado */
`;

export const HeaderNavItem = styled.a`
    text-decoration: none;
    color: ${colors.text};
    font-size: 15px; /* Tamanho levemente menor para elegância */
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;
    padding: 4px 0; /* Adicionado padding vertical para área de clique */

    &:hover {
        color: ${colors.primary};
    }
    
    /* Indicador sutil de hover/ativo - A linha de baixo moderna */
    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        display: block;
        margin-top: 5px;
        right: 0;
        background: ${colors.primary};
        transition: width 0.3s ease, right 0.3s ease;
    }

    &:hover:after,
    &.active:after {
        width: 100%;
        right: 0;
        left: 0;
        transition: width 0.3s ease;
    }
`;

// Botão de Contato (CTA) - Estilo Pill (Cápsula)
export const ContactButton = styled.span`
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: 10px 24px;
    border-radius: 50px; /* Borda curva para o visual de "cápsula" moderno */
    font-weight: 600;
    font-size: 15px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    display: inline-block;
    cursor: pointer;
    border: 2px solid transparent; /* Para evitar "jump" no hover */

    &:hover {
        background-color: ${colors.secondary};
        /* Sombra sutil para indicar profundidade/ação */
        box-shadow: 0 4px 15px rgba(0, 56, 216, 0.4); 
    }
`;