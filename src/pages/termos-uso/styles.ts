import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles'; 

export const LegalSection = styled.section`
    padding: 120px 0 100px;
    background-color: ${colors.background};
    min-height: 100vh;
`;

export const ContentWrapper = styled.article`
    max-width: 800px;
    margin: 0 auto;
    background: ${colors.white};
    padding: 60px;
    border-radius: 24px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
    border: 1px solid ${colors.lightGray}20;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 30px 20px;
    }
`;

export const Title = styled.h1`
    font-size: 42px;
    font-weight: 800;
    color: ${colors.text};
    margin-bottom: 10px;
    text-align: center;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 32px;
    }
`;

export const Highlight = styled.span`
    background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const LastUpdated = styled.p`
    font-size: 14px;
    color: ${colors.text};
    opacity: 0.5;
    text-align: center;
    margin-bottom: 50px;
`;

export const TextSection = styled.div`
    margin-bottom: 40px;

    h2 {
        font-size: 22px;
        font-weight: 700;
        color: ${colors.text};
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        
        &:before {
            content: '';
            width: 4px;
            height: 20px;
            background: ${colors.primary};
            margin-right: 12px;
            border-radius: 2px;
        }
    }

    p {
        font-size: 16px;
        line-height: 1.8;
        color: ${colors.text};
        opacity: 0.8;
    }

    strong {
        color: ${colors.primary};
        font-weight: 700;
    }
`;