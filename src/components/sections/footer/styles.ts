// src/components/Footer/styles.ts
import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

export const FooterSection = styled.footer`
    padding: 60px 0 20px;
    /* Fundo escuro sutil para dar peso e contraste com o resto do site */
    background-color: ${colors.text}; 
    color: ${colors.white}; 
`;

export const FooterTop = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr;
    gap: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid ${colors.lightGray}30;
    margin-bottom: 20px;

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 30px;
    }
`;

export const LogoArea = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (max-width: ${breakpoints.laptop}) {
        grid-column: 1 / -1; /* Ocupa a largura total em tablets */
        margin-bottom: 20px;
    }
`;

export const Logo = styled.div`
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    
    /* TOQUE PIKA! Degradê no texto da logo (igual ao Badge) */
    background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    background-clip: text;
    color: transparent; 
`;

export const LogoIcon = styled.span`
    font-size: 30px;
    margin-right: 8px;
`;

export const LogoSubtitle = styled.p`
    font-size: 16px;
    color: ${colors.lightGray};
    line-height: 1.6;
`;

export const LinksGroup = styled.div`
    li {
        margin-bottom: 10px;
    }
`;

export const LinksList = styled.ul`
    /* DEFINIÇÃO E EXPORTAÇÃO CORRETA */
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const LinksTitle = styled.h4`
    font-size: 18px;
    font-weight: 700;
    color: ${colors.white};
    margin-bottom: 15px;
`;

export const FooterLink = styled.a`
    font-size: 16px;
    color: ${colors.lightGray};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
        color: ${colors.primary};
    }
`;

export const ContactInfo = styled.div`
    
`;

export const ContactText = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 1.6;
    
    a {
        color: ${colors.white};
        text-decoration: none;
        transition: color 0.2s ease;
        
        &:hover {
            color: ${colors.primary};
        }
    }
`;

export const Highlight = styled.span`
    font-weight: 700;
    color: ${colors.white};
    margin-right: 5px;
`;

export const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    
    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
`;

export const Copyright = styled.p`
    font-size: 14px;
    color: ${colors.lightGray};
`;

export const ScrollToTop = styled.a`
    font-size: 14px;
    color: ${colors.primary};
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease;
    
    &:hover {
        color: ${colors.secondary};
        text-decoration: underline;
    }
`;