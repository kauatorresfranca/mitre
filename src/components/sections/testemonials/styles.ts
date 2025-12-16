// src/components/Testimonials/styles.ts
import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

export const TestimonialsSection = styled.section`
    padding: 100px 0;
    /* Fundo ligeiramente diferente para quebrar o layout */
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

export const TestimonialsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    
    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;

export const TestimonialCard = styled.div`
    background-color: ${colors.white}; 
    padding: 30px;
    border-radius: 12px;
    border: 1px solid ${colors.lightGray}30;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    
    /* Hover sutil no padrão PIKA! */
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 56, 216, 0.1); 
    }
`;

export const QuoteIconWrapper = styled.div`
    font-size: 48px;
    line-height: 1;
    margin-bottom: 15px;
    
    span {
        /* Aplicando o degradê PIKA! no ícone/sinal de citação */
        background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent; 
        background-clip: text;
        color: transparent; 
        font-family: Georgia, serif; /* Fonte mais clássica para citação */
        font-weight: 900;
    }
`;

export const QuoteText = styled.p`
    font-size: 18px;
    font-style: italic;
    color: ${colors.text};
    line-height: 1.6;
    margin-bottom: 25px;
    flex-grow: 1; /* Garante que o texto ocupe o espaço e alinhe o client info */
`;

export const ClientInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: auto; /* Garante que fique sempre no rodapé do card */
    padding-top: 15px;
    border-top: 1px solid ${colors.lightGray}20;

    img {
        width: 55px; /* Aumentei um pouco para dar mais destaque */
        height: 55px;
        border-radius: 50%;
        margin-right: 15px;
        border: 2px solid ${colors.primary};
        flex-shrink: 0;
        
        /* A MÁGICA ESTÁ AQUI: */
        object-fit: cover; /* Corta a imagem sem distorcer */
        object-position: center; /* Garante que o rosto fique centralizado */
        
        background-color: ${colors.lightGray}; /* Fundo caso a imagem falhe */
    }
`;

export const ClientDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ClientName = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: ${colors.text};
    margin-bottom: 2px;
`;

export const ClientRole = styled.span`
    font-size: 14px;
    color: ${colors.lightGray};
`;