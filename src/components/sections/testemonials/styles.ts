import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

export const TestimonialsSection = styled.section`
    padding: 100px 0;
    background-color: ${colors.background}; 
`;

export const SectionHeader = styled.header`
    text-align: center;
    margin-bottom: 60px;
`;

export const SectionSubtitle = styled.p`
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${colors.primary};
    margin-bottom: 12px;
`;

export const SectionTitle = styled.h2`
    font-size: 38px;
    font-weight: 800;
    color: ${colors.text};
`;

export const Highlight = styled.span`
    background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    font-weight: 900;
`;

export const TestimonialsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    
    @media (max-width: ${breakpoints.laptop}) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: ${breakpoints.mobile}) { grid-template-columns: 1fr; }
`;

export const TestimonialCard = styled.div`
    background-color: ${colors.white}; 
    padding: 35px;
    border-radius: 20px;
    border: 1px solid ${colors.lightGray}30;
    display: flex;
    flex-direction: column;
    
    /* Box Shadow mais nítido para dar contraste */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); 
    
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-8px);
        /* Shadow mais forte no hover para o efeito de elevação */
        box-shadow: 0 20px 40px rgba(0, 56, 216, 0.12); 
    }
`;

export const ClientInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    img {
        width: 65px; /* Aumentei um pouco mais */
        height: 65px;
        border-radius: 50%;
        margin-right: 15px;
        flex-shrink: 0;
        border: 2px solid ${colors.primary}30;
        
        /* CORREÇÃO DO ENQUADRAMENTO */
        object-fit: cover; 
        object-position: top center; /* Ajustado para focar no topo da foto (rosto) e não no peito/testa */
        
        background-color: ${colors.lightGray};
    }
`;

export const ClientDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ClientName = styled.span`
    font-size: 17px;
    font-weight: 800;
    color: ${colors.text};
`;

export const ClientRole = styled.span`
    font-size: 13px;
    color: ${colors.text};
    opacity: 0.6;
`;

export const StarsContainer = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 15px;
`;

export const QuoteText = styled.p`
    font-size: 16px;
    color: ${colors.text};
    line-height: 1.7;
    margin-bottom: 25px;
    flex-grow: 1;
    opacity: 0.9;
`;

export const ViewProject = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px;
    border-radius: 10px;
    background: ${colors.background};
    color: ${colors.primary};
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid transparent;

    &:hover {
        background: ${colors.white};
        border-color: ${colors.primary};
        color: ${colors.secondary};
    }
`;