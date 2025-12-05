// src/components/FinalCta/index.tsx
import * as S from './styles';

const FinalCta = () => {
    return (
        <S.CtaSection id="start">
            <div className='container'>
                <S.CtaContent>
                    <S.CtaTextContainer>
                        {/* Foco na dor e no resultado final */}
                        <S.CtaTitle>
                            Pronto para Deixar de ser 'Apenas Mais Um' e se Tornar a <S.Highlight>Referência do seu Nicho</S.Highlight>?
                        </S.CtaTitle>
                        <S.CtaSubtitle>
                            Não deixe que sites lentos e designs amadores continuem a limitar seu potencial. Agende seu diagnóstico gratuito e descubra o caminho para a conversão máxima.
                        </S.CtaSubtitle>
                    </S.CtaTextContainer>

                    <S.CtaButtonWrapper>
                        <S.PrimaryButton href="#form">
                            Solicitar Diagnóstico Gratuito
                        </S.PrimaryButton>
                    </S.CtaButtonWrapper>
                </S.CtaContent>
            </div>
        </S.CtaSection>
    );
};

export default FinalCta;