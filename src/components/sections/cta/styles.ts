// src/components/FinalCta/styles.ts
import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

export const CtaSection = styled.section`
    padding: 100px 0;
    /* TOQUE PIKA! Fundo com o degradê da marca para alto contraste */
    background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%);
    color: ${colors.white}; 

    @media (max-width: ${breakpoints.tablet}) {
        padding: 60px 0;
    }
`;

export const CtaContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    text-align: left;

    @media (max-width: ${breakpoints.laptop}) {
        flex-direction: column;
        text-align: center;
    }
`;

export const CtaTextContainer = styled.div`
    max-width: 700px;
    
    @media (max-width: ${breakpoints.laptop}) {
        margin-bottom: 30px;
    }
`;

export const CtaTitle = styled.h2`
    font-size: 44px;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 15px;
    color: ${colors.white};
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 32px;
    }
`;

// Aplicando o degradê inverso (branco para claro) no fundo escuro/colorido
export const Highlight = styled.span`
    background: linear-gradient(45deg, ${colors.white}, ${colors.lightGray});
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    background-clip: text;
    color: transparent; 
    font-weight: 900;
`;

export const CtaSubtitle = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: ${colors.white};
    opacity: 0.9;
    line-height: 1.6;
`;

export const CtaButtonWrapper = styled.div`
    flex-shrink: 0;
`;

// Botão Principal (CTA Forte com Fundo Branco)
export const PrimaryButton = styled.a`
    background-color: ${colors.white};
    color: ${colors.primary}; /* O texto volta a usar o azul da marca */
    padding: 18px 40px; 
    border-radius: 6px; 
    font-size: 18px; 
    font-weight: 800;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3); /* Sombra pesada */

    &:hover {
        background-color: ${colors.lightGray}; 
        color: ${colors.secondary};
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
`;