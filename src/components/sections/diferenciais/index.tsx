// src/components/Diferenciais/index.tsx
import * as S from './styles';
// Importar seus ícones aqui (ex: Lucide Icons)
// Exemplo: import { Search, PenTool, Zap, Rocket } from 'lucide-react'; 

const pillars = [
    {
        title: '1. Imersão e Estratégia',
        description: 'Começamos pela dor. Mergulhamos no seu nicho e público para criar uma proposta de valor irresistível. Sem achismos, apenas dados e foco na sua transformação.',
        // Icon: <Search size={28} />
    },
    {
        title: '2. Design Focado em Conversão',
        description: 'Cada elemento visual é uma decisão estratégica. Não criamos sites bonitos, criamos máquinas de vendas que guiam o usuário ao seu objetivo final (o resultado almejado).',
        // Icon: <PenTool size={28} />
    },
    {
        title: '3. Desenvolvimento de Performance',
        description: 'Tiramos o peso da dor do "site lento". Usamos código limpo e tecnologias de ponta para garantir carregamento instantâneo e nota máxima em performance e SEO.',
        // Icon: <Zap size={28} />
    },
    {
        title: '4. Lançamento e Suporte',
        description: 'O resultado é monitorado. Após a entrega, garantimos 30 dias de suporte total e otimizações para refinar a performance e garantir que você atinja a referência do seu nicho.',
        // Icon: <Rocket size={28} />
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
                    {pillars.map((pillar, index) => (
                        <S.PillarCard key={index}>
                            <S.IconWrapper>
                                {/* Seu Ícone entra aqui */}
                                {index === 0 && '🔍'}
                                {index === 1 && '✍️'}
                                {index === 2 && '⚡️'}
                                {index === 3 && '🚀'}
                            </S.IconWrapper>
                            <S.CardTitle>{pillar.title}</S.CardTitle>
                            <S.CardDescription>{pillar.description}</S.CardDescription>
                        </S.PillarCard>
                    ))}
                </S.PillarsGrid>
            </div>
        </S.DiferenciaisSection>
    );
};

export default Diferenciais;