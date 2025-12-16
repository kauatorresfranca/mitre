import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

export const Header = styled.header`
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid ${colors.lightGray}30; 
    padding: 16px 0;
    position: sticky;
    top: 0;
    z-index: 2000;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.a`
    img { height: 50px; width: auto; }
`;

export const MobileMenuIcon = styled.div`
    display: none;
    cursor: pointer;
    color: ${colors.primary};
    @media (max-width: ${breakpoints.tablet}) { display: block; }
`;

export const HeaderNav = styled.nav<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    gap: 32px;

    @media (max-width: ${breakpoints.tablet}) {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: ${colors.white};
        flex-direction: column;
        padding: 40px 0;
        gap: 24px;
        box-shadow: 0 10px 15px rgba(0,0,0,0.1);
        transition: all 0.3s ease-in-out;
        opacity: ${props => props.$isOpen ? '1' : '0'};
        visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
        transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-10px)'};
    }
`;

export const HeaderNavItem = styled.a`
    color: ${colors.text};
    font-size: 15px;
    font-weight: 500;
    position: relative;
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
`;

export const ContactButton = styled.span`
    background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%);
    color: ${colors.white};
    padding: 12px 28px;
    border-radius: 10px;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0, 56, 216, 0.3);
    transition: all 0.3s ease;
    &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0, 56, 216, 0.5); }
`;