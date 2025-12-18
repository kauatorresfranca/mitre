import * as S from './styles';

const TermosUso = () => {
  return (
    <S.LegalSection>
      <div className="container">
        <S.ContentWrapper>
          <S.Title>Termos de <S.Highlight>Uso</S.Highlight></S.Title>
          <S.LastUpdated>Última atualização: 17 de Dezembro de 2025</S.LastUpdated>

          <S.TextSection>
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site da <strong>MITRE</strong>, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
            </p>
          </S.TextSection>

          <S.TextSection>
            <h2>2. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo original, recursos e funcionalidades deste site (incluindo, mas não se limitando a designs, textos, logos e códigos) são de propriedade exclusiva da MITRE e estão protegidos por leis de direitos autorais e marcas registradas.
            </p>
          </S.TextSection>

          <S.TextSection>
            <h2>3. Limitação de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância a MITRE será responsável por quaisquer danos diretos, indiretos ou consequentes resultantes do uso ou da incapacidade de usar os materiais em nosso site ou serviços.
            </p>
          </S.TextSection>

          <S.TextSection>
            <h2>4. Alterações nos Termos</h2>
            <p>
              Reservamos o direito de modificar estes termos a qualquer momento. Alterações entrarão em vigor imediatamente após sua publicação no site. O uso continuado do site após tais alterações constitui sua aceitação dos novos termos.
            </p>
          </S.TextSection>
        </S.ContentWrapper>
      </div>
    </S.LegalSection>
  );
};

export default TermosUso;