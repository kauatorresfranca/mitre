import * as S from './styles';

const PoliticaPrivacidade = () => {
  return (
    <S.LegalSection>
      <div className="container">
        <S.ContentWrapper>
          <S.Title>Política de <S.Highlight>Privacidade</S.Highlight></S.Title>
          <S.LastUpdated>Última atualização: 17 de Dezembro de 2025</S.LastUpdated>

          <S.TextSection>
            <h2>1. Coleta de Informações</h2>
            <p>
              Coletamos informações que você nos fornece diretamente ao preencher formulários de contato ou diagnóstico, como seu nome, e-mail e número de telefone, com o único objetivo de prestar nossos serviços.
            </p>
          </S.TextSection>

          <S.TextSection>
            <h2>2. Uso dos Dados</h2>
            <p>
              Seus dados são utilizados exclusivamente para comunicação sobre nossos projetos, suporte técnico e envio de propostas comerciais solicitadas por você. <strong>Não vendemos ou compartilhamos seus dados com terceiros.</strong>
            </p>
          </S.TextSection>

          <S.TextSection>
            <h2>3. Cookies e Rastreamento</h2>
            <p>
              Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do nosso site através de ferramentas como Google Analytics. Você pode optar por desativar os cookies nas configurações do seu navegador.
            </p>
          </S.TextSection>

          <S.TextSection>
            <h2>4. Segurança</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, alteração ou destruição.
            </p>
          </S.TextSection>
        </S.ContentWrapper>
      </div>
    </S.LegalSection>
  );
};

export default PoliticaPrivacidade;