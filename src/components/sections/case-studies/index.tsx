// src/components/CaseStudies/index.tsx
import * as S from './styles';
// import { ArrowRight } from 'lucide-react'; // Para o CTA

const cases = [
    {
        title: 'Lançamento High-Ticket de Infoprodutor',
        niche: 'Finanças Pessoais',
        result: '+280% de aumento na conversão de leads',
        color: '#ffc107', // Cor de destaque para este case
    },
    {
        title: 'Site Institucional B2B de Tecnologia',
        niche: 'Software de Logística',
        result: 'Redução de 45% no custo por lead qualificado (CPL)',
        color: '#28a745', // Cor de destaque para este case
    },
    {
        title: 'Otimização de Landing Page de Serviços',
        niche: 'Advocacia Empresarial',
        result: '+12 ligações de agendamento por semana',
        color: '#dc3545', // Cor de destaque para este case
    },
];

const CaseStudies = () => {
    return (
        <S.CaseStudiesSection id="portfolio">
            <div className='container'>
                <S.SectionHeader>
                    <S.SectionSubtitle>
                        A dor do risco se transforma em convicção.
                    </S.SectionSubtitle>
                    <S.SectionTitle>
                        Nossos Resultados. Sua <S.Highlight>Próxima Transformação</S.Highlight>
                    </S.SectionTitle>
                </S.SectionHeader>
                
                <S.CasesGrid>
                    {cases.map((caseItem, index) => (
                        <S.CaseCard key={index}>
                            <S.CaseMeta style={{ '--case-color': caseItem.color }}>
                                {caseItem.niche}
                            </S.CaseMeta>
                            <S.CaseTitle>{caseItem.title}</S.CaseTitle>
                            <S.ResultBox>
                                <p>O Resultado Almejado:</p>
                                <S.ResultValue>{caseItem.result}</S.ResultValue>
                            </S.ResultBox>
                            <S.CaseLink href="#">
                                Ver Estudo de Caso Completo
                                {/* <ArrowRight size={18} /> */}
                            </S.CaseLink>
                        </S.CaseCard>
                    ))}
                </S.CasesGrid>

                <S.FinalCtaContainer>
                    <S.PrimaryButton href="#start">
                        Quero um diagnóstico gratuito como esses!
                    </S.PrimaryButton>
                </S.FinalCtaContainer>

            </div>
        </S.CaseStudiesSection>
    );
};

export default CaseStudies;