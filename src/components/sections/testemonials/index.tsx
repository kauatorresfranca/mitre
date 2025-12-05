// src/components/Testimonials/index.tsx
import * as S from './styles';
// import { Quote } from 'lucide-react'; // Para o ícone de citação

const testimonials = [
    {
        quote: "O site que a MITRE desenvolveu não só superou as expectativas estéticas, como também dobrou nossa taxa de conversão em menos de 60 dias. Finalmente somos a referência que almejávamos!",
        name: 'Carlos Mendes',
        role: 'CEO, TechSolutions',
        avatar: 'carlos-mendes.jpg', // Placeholder
    },
    {
        quote: "O processo deles é incrivelmente transparente e focado em resultado. Tirou a dor de cabeça da lentidão e, de fato, aumentou nosso CPL qualificado em 45%. Profissionais 'Pika!'!",
        name: 'Aline Oliveira',
        role: 'Diretora de Marketing, LogiFast',
        avatar: 'aline-oliveira.jpg', // Placeholder
    },
    {
        quote: "Investimento com retorno garantido. A diferença no Design Estratégico da MITRE é visível: a credibilidade da nossa marca saltou após a entrega da nova Landing Page.",
        name: 'Bruno Rocha',
        role: 'Empreendedor Digital',
        avatar: 'bruno-rocha.jpg', // Placeholder
    },
];

const Testimonials = () => {
    return (
        <S.TestimonialsSection>
            <div className='container'>
                <S.SectionHeader>
                    <S.SectionSubtitle>
                        Clientes que transformaram a dor em resultado.
                    </S.SectionSubtitle>
                    <S.SectionTitle>
                        A <S.Highlight>Voz</S.Highlight> de Quem Já é Referência
                    </S.SectionTitle>
                </S.SectionHeader>
                
                <S.TestimonialsGrid>
                    {testimonials.map((testimonial, index) => (
                        <S.TestimonialCard key={index}>
                            <S.QuoteIconWrapper>
                                {/* <Quote size={36} /> */}
                                <span>“</span>
                            </S.QuoteIconWrapper>
                            <S.QuoteText>{testimonial.quote}</S.QuoteText>
                            
                            <S.ClientInfo>
                                {/* Substituir por imagem real: <img src={testimonial.avatar} alt={testimonial.name} /> */}
                                <S.AvatarPlaceholder />
                                <S.ClientDetails>
                                    <S.ClientName>{testimonial.name}</S.ClientName>
                                    <S.ClientRole>{testimonial.role}</S.ClientRole>
                                </S.ClientDetails>
                            </S.ClientInfo>
                        </S.TestimonialCard>
                    ))}
                </S.TestimonialsGrid>
            </div>
        </S.TestimonialsSection>
    );
};

export default Testimonials;