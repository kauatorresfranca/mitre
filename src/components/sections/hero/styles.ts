import styled, { keyframes } from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

export const Hero = styled.section`
    padding: 100px 0;
    background-color: ${colors.background};
    min-height: 85vh;
    display: flex;
    align-items: center;
    
    @media (max-width: ${breakpoints.tablet}) {
        padding: 60px 0; 
    }
`;

export const HeroContent = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 60px;
    align-items: center;
    
    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
    }
`;

export const TextContainer = styled.div`
    /* No mobile/laptop, este container passa a ser o segundo */
    @media (max-width: ${breakpoints.laptop}) {
        order: 2;
    }
`;

export const Title = styled.h1`
    font-size: 52px;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 20px;
    color: ${colors.text};
    @media (max-width: ${breakpoints.mobile}) { font-size: 36px; }
`;

export const Highlight = styled.span`
    background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
`;

export const Subtitle = styled.p`
    font-size: 18px;
    margin-bottom: 32px;
    color: ${colors.text};
    opacity: 0.9;
`;

export const CtaGroup = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 40px;
    @media (max-width: ${breakpoints.laptop}) { justify-content: center; }
    @media (max-width: ${breakpoints.mobile}) { flex-direction: column; }
`;

export const PrimaryButton = styled.a`
    background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
    color: ${colors.white};
    padding: 14px 28px;
    border-radius: 10px;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 4px 15px ${colors.primaryTransparent};
    transition: 0.3s;
    &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0, 56, 216, 0.4); }
`;

export const SecondaryButton = styled.a`
    padding: 14px 28px;
    border: 1px solid ${colors.lightGray};
    border-radius: 10px;
    color: ${colors.text};
    font-weight: 500;
    text-decoration: none;
    &:hover { border-color: ${colors.primary}; color: ${colors.primary}; }
`;

export const FeatureBadgesContainer = styled.div`
    display: flex;
    gap: 12px;
    @media (max-width: ${breakpoints.laptop}) { justify-content: center; flex-wrap: wrap; }
`;

export const Badge = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    background: ${colors.white};
    padding: 10px 18px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(0, 56, 216, 0.1);
    svg { color: ${colors.primary}; }
`;

export const VisualContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: ${breakpoints.laptop}) {
        order: 1;
    }

    img {
        width: 100%;
        max-width: 550px;
        animation: ${float} 6s ease-in-out infinite;

        @media (max-width: ${breakpoints.laptop}) {
            max-width: 400px; /* Reduzi um pouco para não ocupar a tela toda no celular */
        }
    }
`;