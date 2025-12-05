// src/components/FAQ/styles.ts
import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

export const FAQSection = styled.section`
    padding: 100px 0;
    /* Fundo branco para contraste com o CTA Final (degradê) */
    background-color: ${colors.white}; 
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

export const QuestionsContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

export const QuestionItem = styled.div`
    margin-bottom: 20px;
    border-bottom: 1px solid ${colors.lightGray}30;
    
    /* TOQUE PIKA! Borda lateral sutil no hover */
    &:hover {
        border-left: 3px solid ${colors.primary};
        padding-left: 10px;
        transition: all 0.2s ease;
    }
`;

export const Question = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    color: ${colors.text};
    cursor: pointer;
    transition: color 0.3s ease;
    
    /* Simula a mudança de cor da pergunta ativa */
    &:hover {
        color: ${colors.primary};
    }
`;

export const ToggleIcon = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: ${colors.primary};
    margin-left: 20px;
    flex-shrink: 0;
    transition: transform 0.3s ease;
    
    /* Se for um ícone SVG, aplique o degradê aqui */
    /* svg {
        color: ${colors.primary};
    } */
`;

export const Answer = styled.div`
    /* Por padrão, estaria escondido, mas aqui mostramos o estilo */
    padding: 0 0 20px 0;
    font-size: 16px;
    line-height: 1.6;
    color: ${colors.lightGray};
    /* Para implementar o esconder/mostrar com transição, você usaria 'max-height' e 'overflow: hidden' no estado 'escondido' */
`;