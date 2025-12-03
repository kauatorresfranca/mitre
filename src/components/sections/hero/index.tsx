import * as S from './styles';
// Importar seus ícones aqui, se estiver usando bibliotecas como lucide-react ou react-icons.
// Exemplo: import { Clock, Zap, ShieldCheck } from 'lucide-react'; 

const Hero = () => {
  return (
    <S.Hero>
      <div className='container'>
        <S.HeroContent>
          <S.TextContainer>
            {/* Título Principal Focado em Transformação */}
            <S.Title>
              Deixe de ser 'Apenas um' e se torne a <S.Highlight>Referência do seu Nicho</S.Highlight>
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

            {/* Badges de Destaque e Confiança (Substitui a Barra de Credibilidade) */}
            <S.FeatureBadgesContainer>
                <S.Badge>
                    {/* Se usar Lucide: <Clock size={16} /> */}
                    <span>Entrega Rápida</span>
                </S.Badge>
                <S.Badge>
                    {/* Se usar Lucide: <Zap size={16} /> */}
                    <span>Design Responsivo</span>
                </S.Badge>
                <S.Badge>
                    {/* Se usar Lucide: <ShieldCheck size={16} /> */}
                    <span>Suporte 30 Dias</span>
                </S.Badge>
            </S.FeatureBadgesContainer>

          </S.TextContainer>

          {/* Área Visual (Mockup) */}
          <S.VisualContainer>
            <S.MockupPlaceholder />
          </S.VisualContainer>

        </S.HeroContent>
      </div>
    </S.Hero>
  );
}

export default Hero;