// src/components/Testimonials/index.tsx
import * as S from './styles';
import luizImage from '../../../assets/images/luiz.jpeg'; 
import TicianaImage from '../../../assets/images/ticiana.jpg';
import RosivangelaImage from '../../../assets/images/rosi.jpg';

const testimonials = [
    {
        quote: "Antes da MITRE, éramos apenas mais um consultório. Hoje, nosso site é uma máquina de fechamentos. O design estratégico não só elevou meu ticket médio, como dobrou minha taxa de conversão em 60 dias. Finalmente temos a presença digital que a excelência do meu trabalho exige.",
        name: 'Luiz Miguel',
        role: 'Cirurgião Dentista',
        avatar: `${luizImage}`,
    },
    {
        quote: "O processo deles é cirúrgico. Eliminamos a lentidão que nos fazia perder leads e otimizamos todo o funil. O resultado foi um aumento de 45% no nosso CPL qualificado. Se você quer parar de brincar de ter um site e quer uma ferramenta de vendas de elite, eles são a escolha.",
        name: 'Ticiana Moura',
        role: 'Psicóloga Clínica',
        avatar: `${TicianaImage}`,
    },
    {
        quote: "Investimento com retorno garantido. A diferença no Design Estratégico da MITRE é visível: a credibilidade da nossa marca saltou após a entrega da nova Landing Page. O mercado passou a nos enxergar como a maior referência da região. É outro nível de jogo.",
        name: 'Rosivangela Maria',
        role: 'Ambiente de Beleza',
        avatar: `${RosivangelaImage}`,
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
                                <img src={testimonial.avatar} alt={testimonial.name} />
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