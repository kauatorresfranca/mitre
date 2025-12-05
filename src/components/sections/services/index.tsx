// src/components/ServicesList/index.tsx
import * as S from './styles';
// import { CheckCircle } from 'lucide-react'; // Para o checkmark

const services = [
    {
        title: 'Módulo 1: Descoberta e Estrutura',
        description: 'Aqui, transformamos sua dor em estratégia. Mapeamento de persona, análise da concorrência e arquitetura da informação para uma Landing Page que vende.',
        deliverables: [
            'Mapeamento da Jornada do Cliente (Dor)',
            'Definição da Proposta de Valor Única',
            'Wireframe e Estrutura de Conteúdo',
            'SEO Básico (Estrutura de Títulos e Meta Tags)',
        ],
    },
    {
        title: 'Módulo 2: Design Pika! e Prototipagem',
        description: 'Eliminamos o risco do design amador. Design de alta conversão, identidade visual alinhada e protótipo navegável para validação antes do desenvolvimento.',
        deliverables: [
            'Direção de Arte Exclusiva (Padrão MITRE)',
            'Design UI/UX Focado em Conversão',
            'Criação de Mockups de Alta Fidelidade',
            'Protótipo Navegável (Figma)',
        ],
    },
    {
        title: 'Módulo 3: Desenvolvimento High-Performance',
        description: 'Tiramos a dor da lentidão. Codificação limpa, responsiva e otimizada para a velocidade máxima (SEO e Experiência do Usuário).',
        deliverables: [
            'Desenvolvimento Front-End (React, Next.js ou similar)',
            'Integração com Ferramentas de Marketing (CRM, Analytics)',
            'Otimização de Imagens e Assets',
            'Teste de Responsividade e Acessibilidade',
        ],
    },
];

const ServicesList = () => {
    return (
        <S.ServicesSection id="services">
            <div className='container'>
                <S.SectionHeader>
                    <S.SectionSubtitle>
                        Chega de incertezas. Saiba exatamente o que esperar.
                    </S.SectionSubtitle>
                    <S.SectionTitle>
                        O Escopo Completo que Garante sua <S.Highlight>Referência no Nicho</S.Highlight>
                    </S.SectionTitle>
                </S.SectionHeader>
                
                <S.ServicesGrid>
                    {services.map((service, index) => (
                        <S.ServiceCard key={index}>
                            <S.ModuleTitle>
                                {/* Aplicando o degradê apenas no número do módulo */}
                                <S.Highlight>{`Módulo ${index + 1}:`}</S.Highlight> {service.title.split(': ')[1]}
                            </S.ModuleTitle>
                            <S.Description>{service.description}</S.Description>
                            <S.DeliverablesList>
                                {service.deliverables.map((item, i) => (
                                    <S.DeliverableItem key={i}>
                                        <S.CheckIcon>✅</S.CheckIcon>
                                        <span>{item}</span>
                                    </S.DeliverableItem>
                                ))}
                            </S.DeliverablesList>
                        </S.ServiceCard>
                    ))}
                </S.ServicesGrid>

                <S.FinalCtaContainer>
                    <S.CtaText>
                        Não perca tempo com soluções incompletas. Seu diagnóstico é o primeiro passo para o resultado almejado.
                    </S.CtaText>
                    <S.PrimaryButton href="#start">
                        Solicitar Diagnóstico Gratuito Agora
                    </S.PrimaryButton>
                </S.FinalCtaContainer>

            </div>
        </S.ServicesSection>
    );
};

export default ServicesList;