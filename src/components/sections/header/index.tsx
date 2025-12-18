import { useState } from 'react';
import * as S from './styles';
import mitre from '../../../assets/images/mitre.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.Header $isOpen={isMenuOpen}>
      <div className='container'>
        <S.HeaderContent>
          <S.Logo href="/">
            <img src={mitre} alt="Mitre logo" />
          </S.Logo>
          
          <S.MobileMenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <S.HamburgerIcon $isOpen={isMenuOpen}>
              <span></span>
              <span></span>
              <span></span>
            </S.HamburgerIcon>
          </S.MobileMenuIcon>

          {/* Navigation para Desktop */}
          <S.DesktopNav>
            <S.HeaderNavItem href="#services" className='effect'>Serviços</S.HeaderNavItem>
            <S.HeaderNavItem href="#portfolio" className='effect'>Portfólio</S.HeaderNavItem>
            <S.HeaderNavItem href="#approach" className='effect'>Abordagem</S.HeaderNavItem>
            <S.HeaderNavItem href="#contact">
                <S.ContactButton>Contato</S.ContactButton>
            </S.HeaderNavItem>
          </S.DesktopNav>
        </S.HeaderContent>

        {/* Navigation para Mobile (Expansível) */}
        <S.MobileNav $isOpen={isMenuOpen}>
          <S.HeaderNavItem href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</S.HeaderNavItem>
          <S.HeaderNavItem href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfólio</S.HeaderNavItem>
          <S.HeaderNavItem href="#approach" onClick={() => setIsMenuOpen(false)}>Abordagem</S.HeaderNavItem>
          <S.HeaderNavItem href="#contact" onClick={() => setIsMenuOpen(false)}>
              <S.ContactButton>Contato</S.ContactButton>
          </S.HeaderNavItem>
        </S.MobileNav>
      </div>
    </S.Header>
  );
}

export default Header;