// src/components/Footer/index.tsx
import * as S from './styles';

// Links estruturais (ajustar conforme as rotas do seu site)
const links = [
    { title: 'Home', href: '#home' },
    { title: 'Metodologia', href: '#process' },
    { title: 'Portfólio', href: '#portfolio' },
    { title: 'Serviços', href: '#services' },
    { title: 'Contato', href: '#start' },
];

const legalLinks = [
    { title: 'Política de Privacidade', href: '/privacy' },
    { title: 'Termos de Uso', href: '/terms' },
];

const Footer = () => {
    return (
        <S.FooterSection>
            <div className='container'>
                <S.FooterTop>
                    <S.LogoArea>
                        {/* Use o mesmo componente de logo do seu Header */}
                        <S.Logo>
                            <S.LogoIcon>🔷</S.LogoIcon>
                            MITRE
                        </S.Logo>
                        <S.LogoSubtitle>
                            Transformando a dor da incerteza no resultado da referência no seu nicho.
                        </S.LogoSubtitle>
                    </S.LogoArea>
                    
                    <S.LinksGroup>
                        <S.LinksTitle>Navegação</S.LinksTitle>
                        <S.LinksList>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <S.FooterLink href={link.href}>{link.title}</S.FooterLink>
                                </li>
                            ))}
                        </S.LinksList>
                    </S.LinksGroup>

                    <S.LinksGroup>
                        <S.LinksTitle>Legal</S.LinksTitle>
                        <S.LinksList>
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <S.FooterLink href={link.href}>{link.title}</S.FooterLink>
                                </li>
                            ))}
                        </S.LinksList>
                    </S.LinksGroup>

                    <S.ContactInfo>
                        <S.LinksTitle>Fale Conosco</S.LinksTitle>
                        <S.ContactText>
                            <S.Highlight>Diagnóstico Gratuito:</S.Highlight>
                            <a href="mailto:contato@mitre.com">contato@mitre.com</a>
                        </S.ContactText>
                        <S.ContactText>
                            <S.Highlight>Telefone:</S.Highlight>
                            <a href="tel:+5511999999999">+55 11 99999-9999</a>
                        </S.ContactText>
                    </S.ContactInfo>

                </S.FooterTop>

                <S.FooterBottom>
                    <S.Copyright>
                        © {new Date().getFullYear()} MITRE. Todos os direitos reservados.
                    </S.Copyright>
                    <S.ScrollToTop href="#home">
                        Voltar ao Topo
                        {/* Icone de seta para cima */}
                    </S.ScrollToTop>
                </S.FooterBottom>
            </div>
        </S.FooterSection>
    );
};

export default Footer;