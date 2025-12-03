// src/components/Header/index.tsx
import * as S from './styles';
import mitre from '../../../assets/images/mitre.png';

const Header = () => {
  return (
    <S.Header>
      <div className='container'>
        <S.HeaderContent>
          {/* Logo e Nome da Agência */}
          <S.Logo href="/">
            <img src={mitre} alt="Mitre logo" />
          </S.Logo>
          
          {/* Navegação Principal */}
          <S.HeaderNav>
            <S.HeaderNavItem href="#services">Serviços</S.HeaderNavItem>
            <S.HeaderNavItem href="#portfolio">Portfólio</S.HeaderNavItem>
            <S.HeaderNavItem href="#approach">Abordagem</S.HeaderNavItem>
            <S.HeaderNavItem href="#contact">
                <S.ContactButton>Contato</S.ContactButton> {/* Botão de Destaque */}
            </S.HeaderNavItem>
          </S.HeaderNav>
        </S.HeaderContent>
      </div>
    </S.Header>
  );
}

export default Header;