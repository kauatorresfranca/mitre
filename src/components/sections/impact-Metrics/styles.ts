// src/components/ImpactMetrics/styles.ts
import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

export const MetricsSection = styled.section`
    /* Fundo ligeiramente diferente para quebrar a seção do Hero */
    background-color: ${colors.background}; 
`;

export const MetricsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 40px 0;
    
    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
        gap: 30px;
    }
`;

export const MetricCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px 20px;
    
    /* Efeito de Card Flutuante e Limpo */
    background-color: ${colors.white};
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }
`;

export const MetricValue = styled.h2`
    font-size: 48px;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 8px;
    
    /* TOQUE PIKA! Degradê nos números */
    background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    background-clip: text;
    color: transparent; 
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 40px;
    }
`;

export const MetricLabel = styled.p`
    font-size: 16px;
    color: ${colors.text};
    font-weight: 500;
`;