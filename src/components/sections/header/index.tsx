import { useState } from 'react';
import * as S from './styles';
import mitre from '../../../assets/images/mitre.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.Header>
      <div className='container'>
        <S.HeaderContent>
          <S.Logo href="/">
            <img src={mitre} alt="Mitre logo" />
          </S.Logo>
          
          <S.MobileMenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </S.MobileMenuIcon>

          <S.HeaderNav $isOpen={isMenuOpen}>
            <S.HeaderNavItem href="#services" className='effect' onClick={() => setIsMenuOpen(false)}>Serviços</S.HeaderNavItem>
            <S.HeaderNavItem href="#portfolio" className='effect' onClick={() => setIsMenuOpen(false)}>Portfólio</S.HeaderNavItem>
            <S.HeaderNavItem href="#approach" className='effect' onClick={() => setIsMenuOpen(false)}>Abordagem</S.HeaderNavItem>
            <S.HeaderNavItem href="#contact" onClick={() => setIsMenuOpen(false)}>
                <S.ContactButton>Contato</S.ContactButton>
            </S.HeaderNavItem>
          </S.HeaderNav>
        </S.HeaderContent>
      </div>
    </S.Header>
  );
}

export default Header;