import * as S from './styles';
import { Star, ExternalLink } from 'lucide-react';
import luizImage from '../../../assets/images/luiz.jpeg'; 
import TicianaImage from '../../../assets/images/ticiana.jpg';
import RosivangelaImage from '../../../assets/images/rosi.jpg';

const testimonials = [
    {
        quote: "O que mais me impressionou foi a estratégia por trás do design. Eles não só fizeram um site bonito, mas criaram uma jornada que faz o paciente chegar no meu WhatsApp já pronto para fechar o tratamento. O retorno veio muito antes do esperado.",
        name: 'Luiz Miguel',
        role: 'Cirurgião Dentista',
        avatar: `${luizImage}`,
        link: 'https://luiz-miguel.vercel.app/'
    },
    {
        quote: "Eu tinha receio de site ser algo frio, mas a MITRE conseguiu traduzir minha essência no digital. Meus leads agora são muito mais qualificados, pessoas que realmente valorizam meu tempo e meu método. Foi o divisor de águas que eu precisava.",
        name: 'Ticiana Moura',
        role: 'Psicóloga Clínica',
        avatar: `${TicianaImage}`,
        link: 'https://www.ticianamourapsicologa.com.br/'
    },
    {
        quote: "Sempre achei que meu Instagram bastava, até ver o impacto de ter uma Landing Page profissional. A autoridade que ganhei perante os fornecedores e clientes de alto padrão mudou o patamar do meu estúdio. Vale cada centavo.",
        name: 'Rosivangela Maria',
        role: 'Ambiente de Beleza',
        avatar: `${RosivangelaImage}`,
        link: 'https://www.ambientedebeleza.com/'
    },
];

const Testimonials = () => {
    return (
        <S.TestimonialsSection>
            <div className='container'>
                <S.SectionHeader>
                    <S.SectionSubtitle>Depoimentos Reais</S.SectionSubtitle>
                    <S.SectionTitle>
                        A <S.Highlight>Experiência</S.Highlight> de quem é MITRE
                    </S.SectionTitle>
                </S.SectionHeader>
                
                <S.TestimonialsGrid>
                    {testimonials.map((testimonial, index) => (
                        <S.TestimonialCard key={index}>
                            <S.ClientInfo>
                                <img src={testimonial.avatar} alt={testimonial.name} />
                                <S.ClientDetails>
                                    <S.ClientName>{testimonial.name}</S.ClientName>
                                    <S.ClientRole>{testimonial.role}</S.ClientRole>
                                </S.ClientDetails>
                            </S.ClientInfo>

                            <S.StarsContainer>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                                ))}
                            </S.StarsContainer>

                            <S.QuoteText>"{testimonial.quote}"</S.QuoteText>
                            
                            <S.ViewProject href={testimonial.link} target="_blank">
                                Ver Resultado On-line
                                <ExternalLink size={14} />
                            </S.ViewProject>
                        </S.TestimonialCard>
                    ))}
                </S.TestimonialsGrid>
            </div>
        </S.TestimonialsSection>
    );
};

export default Testimonials;