import * as S from './styles'
import mitre from '../../../assets/images/mitre.png'

const Header = () => {
  return (
    <S.Header>
      <img src={mitre} alt="Mitre logo" />
    </S.Header>
  )
}

export default Header