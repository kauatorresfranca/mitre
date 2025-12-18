import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

// Adicionamos o tipo aqui para o TS parar de reclamar
export const Header = styled.header<{ $isOpen?: boolean }>`
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.lightGray}40; 
    padding: 15px 0;
    
    /* Mudamos para fixed para ele nunca "pular" no scroll mobile */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2000;
    
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
    transition: background 0.3s ease;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const Logo = styled.a`
    img { 
        height: 50px; 
        width: auto; 
        display: block;
    }
`;

export const DesktopNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 32px;

    @media (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`;

export const MobileMenuIcon = styled.div`
    display: none;
    cursor: pointer;
    
    @media (max-width: ${breakpoints.tablet}) { 
        display: flex; 
    }
`;

export const HamburgerIcon = styled.div<{ $isOpen: boolean }>`
    width: 28px;
    height: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
        display: block;
        height: 3px;
        width: 100%;
        background-color: ${colors.text}; /* Cor do texto conforme solicitado */
        border-radius: 3px;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    ${props => props.$isOpen && `
        span:nth-child(1) { transform: translateY(8.5px) rotate(45deg); }
        span:nth-child(2) { opacity: 0; transform: translateX(-10px); }
        span:nth-child(3) { transform: translateY(-8.5px) rotate(-45deg); }
    `}
`;

export const MobileNav = styled.nav<{ $isOpen: boolean }>`
    display: none;

    @media (max-width: ${breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        
        /* Agora ele é absoluto em relação ao Header fixo */
        position: absolute;
        top: 100%; 
        left: -20px; 
        width: calc(100% + 40px);
        background: ${colors.white};
        z-index: 1000;
        
        overflow: hidden;
        /* Transição suave de expansão */
        max-height: ${props => props.$isOpen ? '450px' : '0'};
        padding: ${props => props.$isOpen ? '30px 20px' : '0 20px'};
        opacity: ${props => props.$isOpen ? '1' : '0'};
        visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        
        border-top: 1px solid ${colors.lightGray}20;
        border-bottom: 2px solid ${colors.lightGray}20;
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.05);
    }
`;

export const HeaderNavItem = styled.a`
    color: ${colors.text};
    font-size: 15px;
    font-weight: 500;
    position: relative;
    text-decoration: none;

    &.effect:after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: ${colors.primary};
        transition: width 0.3s ease;
    }
    &:hover:after { width: 100%; }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 18px;
        font-weight: 700;
    }
`;

export const ContactButton = styled.span`
    background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%);
    color: ${colors.white};
    padding: 12px 28px;
    border-radius: 10px;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0, 56, 216, 0.3);
    transition: all 0.3s ease;
    display: inline-block;

    &:hover { 
        transform: translateY(-2px); 
        box-shadow: 0 6px 20px rgba(0, 56, 216, 0.5); 
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        max-width: 250px;
        text-align: center;
    }
`;