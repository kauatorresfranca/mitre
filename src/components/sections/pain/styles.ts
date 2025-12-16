import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

export const Section = styled.section`
    padding: 100px 0;
    background-color: ${colors.background};
`;

export const Title = styled.h2`
    font-size: 38px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: ${breakpoints.mobile}) { font-size: 30px; }
`;

export const Highlight = styled.span`
    color: ${colors.primary};
`;

export const Subtitle = styled.p`
    font-size: 20px;
    text-align: center;
    max-width: 900px;
    margin: 0 auto 60px;
    color: #444;
`;

export const PainGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    @media (max-width: ${breakpoints.laptop}) { grid-template-columns: 1fr; }
`;

export const PainCard = styled.div`
    background-color: ${colors.white};
    padding: 40px;
    border-radius: 16px;
    border: 1px solid ${colors.lightGray}40;
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.05);
    transition: 0.3s;
    &:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
    h3 { font-size: 26px; font-weight: 800; margin-bottom: 12px; }
    p { font-size: 17px; line-height: 1.6; }
`;

export const PainHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    svg { color: ${colors.primary}; }
    span { font-size: 14px; font-weight: 800; color: ${colors.secondary}; text-transform: uppercase; }
`;