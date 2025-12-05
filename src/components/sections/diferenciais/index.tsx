import * as S from './styles';
import { Search, Feather, Zap, Rocket } from 'lucide-react'; 

const pillars = [
    {
        title: '1. Imersão e Estratégia',
        description: 'Começamos pela dor. Mergulhamos no seu nicho e público para criar uma proposta de valor irresistível. Sem achismos, apenas dados e foco na sua transformação.',
        Icon: Search,
    },
    {
        title: '2. Design Focado em Conversão',
        description: 'Cada elemento visual é uma decisão estratégica. Não criamos sites bonitos, criamos máquinas de vendas que guiam o usuário ao seu objetivo final (o resultado almejado).',
        Icon: Feather, // Mudando para Feather (Pena/Ferramenta) em vez de PenTool, que é mais conceitual.
    },
    {
        title: '3. Desenvolvimento de Performance',
        description: 'Tiramos o peso da dor do "site lento". Usamos código limpo e tecnologias de ponta para garantir carregamento instantâneo e nota máxima em performance e SEO.',
        Icon: Zap,
    },
    {
        title: '4. Lançamento e Suporte',
        description: 'O resultado é monitorado. Após a entrega, garantimos 30 dias de suporte total e otimizações para refinar a performance e garantir que você atinja a referência do seu nicho.',
        Icon: Rocket,
    },
];

const Diferenciais = () => {
    return (
        <S.DiferenciaisSection id="process">
            <div className='container'>
                <S.SectionHeader>
                    {/* Foca na dor e introduz o resultado (a metodologia) */}
                    <S.SectionSubtitle>
                        Chega de processos que não entregam o resultado almejado.
                    </S.SectionSubtitle>
                    <S.SectionTitle>
                        Nossa Metodologia de <S.Highlight>Transformação em 4 Pilares</S.Highlight>
                    </S.SectionTitle>
                </S.SectionHeader>
                
                <S.PillarsGrid>
                    {pillars.map((pillar, index) => {
                        const IconComponent = pillar.Icon;
                        return (
                            <S.PillarCard key={index}>
                                <S.IconWrapper>
                                    <IconComponent size={30} />
                                </S.IconWrapper>
                                <S.CardTitle>{pillar.title}</S.CardTitle>
                                <S.CardDescription>{pillar.description}</S.CardDescription>
                            </S.PillarCard>
                        );
                    })}
                </S.PillarsGrid>
            </div>
        </S.DiferenciaisSection>
    );
};

export default Diferenciais;