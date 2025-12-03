// src/components/Header/styles.ts
import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

export const Header = styled.header`
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid ${colors.lightGray}20; 
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
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

// Estilo do Logo - Foco na Imagem
export const Logo = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.3s ease;

    img {
        height: 58px; /* Tamanho ajustado para se encaixar melhor no header */
        width: auto;
    }
    
    /* Removemos LogoText e LogoSpan se a imagem já tiver o texto "MITRE" */

    &:hover {
        opacity: 0.8;
    }
`;

// Navegação
export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 36px;
`;

export const HeaderNavItem = styled.a`
    text-decoration: none;
    color: ${colors.text};
    font-size: 15px;
    font-weight: 500;
    transition: color 0.3s ease;
    padding: 4px 0; 
    position: relative; /* Necessário para o novo efeito */

    &:hover {
        color: ${colors.primary};
    }
    
    /* Novo Efeito de Destaque no Hover (Linha Sutil) */
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: ${colors.primary}; /* Cor principal */
        transition: width 0.3s ease, left 0.3s ease;
    }

    &:hover:after,
    &.active:after {
        width: 100%;
        left: 0;
    }
`;

// Botão de Contato (CTA) - INJETANDO O DEGRADÊ
export const ContactButton = styled.span`
    /* Substitui a cor sólida pelo degradê da logo */
    background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%);
    color: ${colors.white};
    padding: 10px 24px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s ease;
    display: inline-block;
    cursor: pointer;
    border: none; /* Remove a borda */
    box-shadow: 0 4px 15px rgba(0, 56, 216, 0.4);

    &:hover {
        /* Aumenta a intensidade do shadow para o hover */
        box-shadow: 0 6px 20px rgba(0, 56, 216, 0.6); 
        transform: translateY(-1px);
        /* Não muda o background, apenas o shadow */
    }
`;