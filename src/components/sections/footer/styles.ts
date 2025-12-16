import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

export const FooterSection = styled.footer`
    padding: 80px 0 40px;
    background-color: ${colors.background}; /* Fundo claro padronizado */
    border-top: 1px solid ${colors.lightGray}30;
`;

export const FooterTop = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
    gap: 40px;
    padding-bottom: 60px;
    border-bottom: 1px solid ${colors.lightGray}20;

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

export const LogoArea = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (max-width: ${breakpoints.laptop}) {
        grid-column: 1 / -1;
        align-items: center;
        margin-bottom: 20px;
    }
`;

export const Logo = styled.a`
    display: inline-block;
    margin-bottom: 20px;
    transition: transform 0.3s ease;

    img {
        height: 48px; /* Controle total do tamanho da logo aqui */
        width: auto;
    }

    &:hover {
        transform: scale(1.05);
    }
`;

export const LogoSubtitle = styled.p`
    font-size: 15px;
    color: ${colors.text};
    opacity: 0.7;
    line-height: 1.6;
    max-width: 280px;

    @media (max-width: ${breakpoints.laptop}) {
        max-width: 400px;
        text-align: center;
    }
`;

export const LinksGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LinksList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
        margin-bottom: 12px;
    }
`;

export const LinksTitle = styled.h4`
    font-size: 16px;
    font-weight: 800;
    color: ${colors.text};
    margin-bottom: 24px;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const FooterLink = styled.a`
    font-size: 15px;
    color: ${colors.text};
    opacity: 0.8;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
        color: ${colors.primary};
        opacity: 1;
        padding-left: 5px;
    }
`;

export const ContactInfo = styled.div`
    @media (max-width: ${breakpoints.mobile}) {
        align-items: center;
    }
`;

export const ContactText = styled.p`
    font-size: 15px;
    margin-bottom: 12px;
    color: ${colors.text};
    
    a {
        display: block;
        color: ${colors.primary};
        font-weight: 600;
        text-decoration: none;
        margin-top: 4px;
        transition: color 0.2s ease;
        
        &:hover {
            color: ${colors.secondary};
        }
    }
`;

export const Highlight = styled.span`
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    opacity: 0.6;
`;

export const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    
    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column-reverse;
        gap: 20px;
    }
`;

export const Copyright = styled.p`
    font-size: 14px;
    color: ${colors.text};
    opacity: 0.5;
`;

export const ScrollToTop = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: ${colors.primary};
    text-decoration: none;
    font-weight: 700;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-3px);
        color: ${colors.secondary};
    }
`;