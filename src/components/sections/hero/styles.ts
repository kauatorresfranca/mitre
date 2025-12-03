import styled, { keyframes } from 'styled-components';
// Importação corrigida (assumindo a estrutura de pastas)
import { colors, breakpoints } from '../../../../styles'; 

const float = keyframes`
  0% { transform: translateY(0px); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); }
  50% { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1); }
  100% { transform: translateY(0px); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); }
`;

export const Hero = styled.div`
    background-color: ${colors.background};
    padding: 120px 0; 
    min-height: 85vh; 
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
        padding: 60px 0;
        min-height: auto;
    }
`;

export const HeroContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; /* Layout simétrico e equilibrado */
    gap: 80px;
    align-items: center;

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: 1fr;
        text-align: left;
        gap: 50px;
    }
`;

export const TextContainer = styled.div`
    @media (max-width: ${breakpoints.laptop}) {
        order: 2; /* Texto abaixo da ilustração no mobile */
    }
`;

// TÍTULO MODERNO E PODEROSO
export const Title = styled.h1`
    font-size: 52px; 
    font-weight: 800; 
    line-height: 1.2;
    margin-bottom: 20px;
    color: ${colors.text};

    @media (max-width: ${breakpoints.laptop}) {
        font-size: 44px;
        text-align: center;
    }
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 36px;
    }
`;

// DESTAQUE COM DEGRADÊ (TOQUE 'PIKA!' DA LOGO)
export const Highlight = styled.span`
    background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    background-clip: text;
    color: transparent; 

    font-weight: 900;
`;

// Subtítulo
export const Subtitle = styled.p`
    font-size: 18px; 
    color: ${colors.text};
    line-height: 1.6;
    margin-bottom: 32px;

    @media (max-width: ${breakpoints.laptop}) {
        text-align: center;
    }
`;

export const CtaGroup = styled.div`
    display: flex;
    gap: 16px; 
    margin-bottom: 40px;
    
    @media (max-width: ${breakpoints.laptop}) {
        justify-content: center;
    }
    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        gap: 12px;
    }
`;

// Botão Principal (CTA Forte com Degradê)
export const PrimaryButton = styled.a`
    background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%);
    color: ${colors.white};
    padding: 14px 28px; 
    border-radius: 10px; 
    font-size: 16px; 
    font-weight: 700;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    box-shadow: 0 4px 15px rgba(0, 56, 216, 0.2);

    &:hover {
        background: linear-gradient(90deg, ${colors.secondary} 0%, ${colors.primary} 100%);
        transform: translateY(-1px);
        box-shadow: 0 6px 20px rgba(0, 56, 216, 0.4);
    }
`;

// Botão Secundário (Minimalista)
export const SecondaryButton = styled.a`
    background-color: transparent;
    color: ${colors.text};
    padding: 14px 28px;
    border: 1px solid ${colors.lightGray}; 
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
        border-color: ${colors.primary};
        color: ${colors.primary};
    }
`;

/* --- ESTILOS PARA BADGES DE DESTAQUE --- */

export const FeatureBadgesContainer = styled.div`
    display: flex;
    gap: 12px; 
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid ${colors.lightGray}30; /* Linha de separação discreta */

    @media (max-width: ${breakpoints.laptop}) {
        justify-content: center;
        flex-wrap: wrap;
    }
    @media (max-width: ${breakpoints.mobile}) {
        gap: 10px;
    }
`;

export const Badge = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 50px; /* Mantém a Borda de cápsula */
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;

    /* CONTRASTE: Fundo Azul Semi-transparente e Elegante */
    /* Usando a cor primária (azul) com 15% de opacidade */
    background: ${colors.primary}26; /* Hex com opacidade (Ex: #0038d826) */
    /* OU usando rgba para melhor controle: */
    /* background: rgba(0, 56, 216, 0.15); */
    
    box-shadow: 0 4px 12px rgba(0, 56, 216, 0.15); /* Sombra suave azulada */
    border: 1px solid ${colors.primary}33; /* Borda sutil azulada */

    /* EFEITO AZUL FORTE NO TEXTO E ÍCONES */
    position: relative;
    
    span {
        /* APLICANDO O DEGRADÊ AZUL DA LOGO NO TEXTO */
        background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent; 
        background-clip: text;
        color: transparent; 
        font-weight: 700; /* Aumentei o peso para contraste */
    }
    
    /* Para Ícones SVG/React (Garantindo o azul forte) */
    svg {
        color: ${colors.primary}; 
    }
    
    /* Efeito de hover sutil para interatividade */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-1px);
        /* Aumenta a opacidade e a sombra no hover */
        background: ${colors.primary}33; 
        box-shadow: 0 6px 15px rgba(0, 56, 216, 0.25);
    }
`;

export const VisualContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: ${breakpoints.laptop}) {
        order: 1;
    }
`;

// MOCKUP (Mockup com Borda de Degradê)
export const MockupPlaceholder = styled.div`
    width: 100%;
    max-width: 550px;
    height: 400px;
    background: ${colors.white};
    border-radius: 12px;
    
    /* Degradê aplicado como borda */
    border-image-source: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
    border-image-slice: 1;
    border-width: 4px; 
    border-style: solid;

    position: relative;
    overflow: hidden;
    animation: ${float} 6s ease-in-out infinite; 
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

    /* Simulação de status bar */
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10px;
        background-color: ${colors.text};
        opacity: 0.1;
    }

    /* Fundo sutil */
    background: linear-gradient(to top, ${colors.background} 0%, ${colors.white} 30%);
    
    @media (max-width: ${breakpoints.laptop}) {
        max-width: 80%;
        height: 300px;
    }
`;