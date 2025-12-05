// src/components/Diferenciais/styles.ts
import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

export const DiferenciaisSection = styled.section`
    padding: 100px 0;
    /* Fundo branco limpo para que os cards se destaquem */
    background-color: ${colors.white}; 
    @media (max-width: ${breakpoints.tablet}) {
        padding: 60px 0;
    }
`;

export const SectionHeader = styled.header`
    text-align: center;
    max-width: 800px;
    margin: 0 auto 60px;
    @media (max-width: ${breakpoints.tablet}) {
        margin-bottom: 40px;
    }
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

export const PillarsGrid = styled.div`
    display: grid;
    /* 4 colunas em desktops, 2 em tablets, 1 em mobile */
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    
    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;

export const PillarCard = styled.div`
    background-color: ${colors.background}; 
    padding: 30px;
    border-radius: 12px;
    /* Borda sutil para definir o card */
    border: 1px solid ${colors.lightGray}30;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    
    /* Efeito de hover "Pika!" */
    &:hover {
        transform: translateY(-8px);
        /* Sombra mais forte e leve toque de azul na sombra */
        box-shadow: 0 15px 30px rgba(0, 56, 216, 0.15); 
        border-color: ${colors.primary};
    }
`;

export const IconWrapper = styled.div`
    font-size: 40px; /* Para os emojis placeholders */
    margin-bottom: 20px;
    
    /* TOQUE PIKA! Aplicando degradê no background do ícone */
    svg {
        background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent; 
        background-clip: text;
        color: transparent; 
    }
`;

export const CardTitle = styled.h3`
    font-size: 20px;
    font-weight: 700;
    color: ${colors.text};
    margin-bottom: 12px;
    
    /* Opcional: Se quiser o título do card com degradê, descomente: */
    /* background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    background-clip: text;
    color: transparent; */
`;

export const CardDescription = styled.p`
    font-size: 16px;
    color: ${colors.lightGray};
    line-height: 1.6;
`;