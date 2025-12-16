import * as S from './styles';
import mitre from '../../../../src/assets/images/mitre.png';
import { ArrowUp } from 'lucide-react';

const links = [
    { title: 'Home', href: '#' },
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
                        <S.Logo href="#home">
                            <img src={mitre} alt="Mitre logo" />
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
                            <S.Highlight>Diagnóstico:</S.Highlight>
                            <a href="mailto:contato@mitre.com">contato@mitre.com</a>
                        </S.ContactText>
                        <S.ContactText>
                            <S.Highlight>Telefone:</S.Highlight>
                            <a href="tel:+5582996124145">+55 82 99612-4145</a>
                        </S.ContactText>
                    </S.ContactInfo>
                </S.FooterTop>

                <S.FooterBottom>
                    <S.Copyright>
                        © {new Date().getFullYear()} MITRE. Todos os direitos reservados.
                    </S.Copyright>
                    <S.ScrollToTop href="#">
                        Voltar ao Topo
                        <ArrowUp size={16} />
                    </S.ScrollToTop>
                </S.FooterBottom>
            </div>
        </S.FooterSection>
    );
};

export default Footer;