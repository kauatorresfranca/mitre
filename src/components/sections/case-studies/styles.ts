// src/components/CaseStudies/styles.ts
import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

export const CaseStudiesSection = styled.section`
    padding: 100px 0;
    /* Usando a cor de background padrão para alternar com a seção branca anterior */
    background-color: ${colors.background}; 
    @media (max-width: ${breakpoints.tablet}) {
        padding: 60px 0;
    }
`;

export const SectionHeader = styled.header`
    text-align: center;
    max-width: 800px;
    margin: 0 auto 60px;
`;

export const SectionSubtitle = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: ${colors.primary};
    margin-bottom: 8px;
`;

export const SectionTitle = styled.h2`
    font-size: 38px;
    font-weight: 800;
    color: ${colors.text};
    line-height: 1.2;
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 30px;
    }
`;

// O mesmo destaque usado na Hero Section
export const Highlight = styled.span`
    background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    background-clip: text;
    color: transparent; 
    font-weight: 900;
`;

export const CasesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 60px;

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;

export const CaseCard = styled.div`
    background-color: ${colors.white}; 
    padding: 30px;
    border-radius: 12px;
    border: 1px solid ${colors.lightGray}30;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        transform: translateY(-5px);
        /* Foco no azul da marca na sombra */
        box-shadow: 0 10px 25px rgba(0, 56, 216, 0.1); 
    }
`;

export const CaseMeta = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: var(--case-color, ${colors.primary}); /* Usa a cor definida no componente */
    margin-bottom: 10px;
    padding: 4px 8px;
    border-radius: 4px;
    align-self: flex-start;
    /* Fundo suave com a cor do case */
    background-color: color-mix(in srgb, var(--case-color, ${colors.primary}) 20%, white);
`;

export const CaseTitle = styled.h3`
    font-size: 22px;
    font-weight: 700;
    color: ${colors.text};
    margin-bottom: 20px;
    line-height: 1.3;
`;

export const ResultBox = styled.div`
    margin-top: auto; /* Empurra para o final do card */
    padding: 15px 0;
    border-top: 1px solid ${colors.lightGray}30;
    margin-bottom: 15px;

    p {
        font-size: 14px;
        color: ${colors.lightGray};
        margin-bottom: 5px;
    }
`;

export const ResultValue = styled.p`
    font-size: 20px;
    font-weight: 800;
    /* TOQUE PIKA! Degradê no resultado */
    background: linear-gradient(90deg, ${colors.secondary}, ${colors.primary});
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    background-clip: text;
    color: transparent;
`;

export const CaseLink = styled.a`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    font-weight: 600;
    color: ${colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: ${colors.secondary};
    }
`;

export const FinalCtaContainer = styled.div`
    text-align: center;
    margin-top: 20px;
`;

// Reutilizando o PrimaryButton da Hero Section para consistência
export const PrimaryButton = styled.a`
    background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%);
    color: ${colors.white};
    padding: 16px 32px; 
    border-radius: 4px; 
    font-size: 18px; 
    font-weight: 700;
    transition: all 0.3s ease;
    display: inline-flex;
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