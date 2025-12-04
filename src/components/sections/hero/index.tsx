import * as S from './styles';
import heroImg from '../../../assets/images/hero.png';
import { Clock, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <S.Hero>
      <div className='container'>
        <S.HeroContent>
          <S.TextContainer>
            {/* Título Principal Focado em Transformação */}
            <S.Title>
              Se torne a <S.Highlight>Referência do seu Nicho</S.Highlight>
            </S.Title>
            
            {/* Subtítulo Detalhando o Serviço */}
            <S.Subtitle>
              Desenvolvemos Landing Pages de alto padrão e Sites Institucionais que transformam a percepção do seu cliente em *confiança imediata*.
            </S.Subtitle>

            <S.CtaGroup>
              <S.PrimaryButton href="#start">
                Solicitar Diagnóstico Gratuito
              </S.PrimaryButton>
              <S.SecondaryButton href="#cases">
                Ver Cases de Sucesso
              </S.SecondaryButton>
            </S.CtaGroup>
            <S.FeatureBadgesContainer>
                <S.Badge>
                    <Clock size={16} /> 
                    <span>Entrega Rápida</span>
                </S.Badge>
                <S.Badge>
                    <Zap size={16} />
                    <span>Design Responsivo</span>
                </S.Badge>
                <S.Badge>
                    <ShieldCheck size={16} />
                    <span>Suporte 30 Dias</span>
                </S.Badge>
            </S.FeatureBadgesContainer>
          </S.TextContainer>
          

          {/* Área Visual (Mockup) */}
          <S.VisualContainer>
            <img src={heroImg} alt="" />
          </S.VisualContainer>
        </S.HeroContent>
      </div>
    </S.Hero>
  );
}

export default Hero;