import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

export const DiferenciaisSection = styled.section`
    padding: 100px 0;
    /* Fundo suave: azul mais claro (colors.background) */
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

// O destaque PIKA!
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
    background-color: ${colors.white}; 
    padding: 30px;
    border-radius: 12px;
    border: 1px solid ${colors.lightGray}30;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        /* Foco no azul da marca na sombra (Padrão PIKA!) */
        box-shadow: 0 10px 25px rgba(0, 56, 216, 0.15); 
    }
`;

export const IconWrapper = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 20px 0;
    border-radius: 50%;
    
    /* TOQUE PIKA! Fundo com degradê para o ícone */
    background: linear-gradient(45deg, ${colors.primary} 0%, ${colors.secondary} 100%);
    box-shadow: 0 4px 10px rgba(0, 56, 216, 0.2); 
    
    /* Cor do ícone - Oposto ao fundo para contraste */
    svg {
        color: ${colors.white};
        transition: transform 0.3s ease;
    }
    
    ${PillarCard}:hover & svg {
        transform: scale(1.1); /* Animação no ícone ao passar o mouse no card */
    }
`;

export const CardTitle = styled.h3`
    font-size: 22px;
    font-weight: 700;
    color: ${colors.text};
    margin-bottom: 10px;
    line-height: 1.3;
`;

export const CardDescription = styled.p`
    font-size: 16px;
    color: ${colors.lightGray};
    line-height: 1.5;
`;