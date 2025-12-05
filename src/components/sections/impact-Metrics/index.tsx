// src/components/ImpactMetrics/index.tsx
import * as S from './styles';

const metrics = [
    {
        value: '+80',
        label: 'Projetos de Alto Nível Entregues',
        // Ícone de sucesso (ex: Zap)
    },
    {
        value: '98%',
        label: 'Satisfação e Retenção de Clientes',
        // Ícone de satisfação (ex: Coração/Estrela)
    },
    {
        value: '5 Anos',
        label: 'Especialização em Nichos Premium',
        // Ícone de tempo (ex: Relógio)
    },
];

const ImpactMetrics = () => {
    return (
        <S.MetricsSection>
            <div className='container'>
                <S.MetricsGrid>
                    {metrics.map((metric, index) => (
                        <S.MetricCard key={index}>
                            {/* Assumindo que você terá um ícone aqui */}
                            {/* <IconComponent size={40} /> */}
                            <S.MetricValue>{metric.value}</S.MetricValue>
                            <S.MetricLabel>{metric.label}</S.MetricLabel>
                        </S.MetricCard>
                    ))}
                </S.MetricsGrid>
            </div>
        </S.MetricsSection>
    );
};

export default ImpactMetrics;