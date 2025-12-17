import { useState } from 'react';
import * as S from './styles';
import { ChevronDown } from 'lucide-react';

const questions = [
    { 
        question: 'Como funciona o processo de criação?', 
        answer: (
            <>
                <p>Nosso método é dividido em etapas estratégicas:</p>
                <ul style={{ marginTop: '10px', listStyle: 'none' }}>
                    <li><strong>Reunião de Alinhamento:</strong> Entendemos seu negócio e expectativas.</li>
                    <li><strong>Criação de Wireframe:</strong> Layout inicial de baixa fidelidade para aprovação.</li>
                    <li><strong>Construção do Design:</strong> Desenvolvimento do design estratégico completo.</li>
                    <li><strong>Aprovação Final:</strong> Você valida ou solicita ajustes finos.</li>
                    <li><strong>Otimização:</strong> Deixamos sua página com carregamento ultra rápido.</li>
                    <li><strong>Implantação:</strong> Seu site no ar e pronto para converter.</li>
                </ul>
            </>
        )
    },
    { 
        question: 'Quantas revisões posso solicitar no projeto?', 
        answer: 'Trabalhamos com foco total na sua satisfação. O processo inclui etapas de aprovação intermediárias para garantir que o design final esteja alinhado, mas você tem direito a rodadas de ajustes após a entrega do design completo.' 
    },
    { 
        question: 'Quais são as formas de pagamento?', 
        answer: 'Oferecemos flexibilidade: pagamento via PIX com desconto, ou parcelamento em até 12x no cartão de crédito. Geralmente trabalhamos com um sinal para início e o restante na entrega.' 
    },
    { 
        question: 'Como garantimos a segurança da sua contratação?', 
        answer: 'Formalizamos tudo através de um contrato de prestação de serviços jurídico, com prazos e entregas garantidos, assegurando total transparência para ambos os lados.' 
    },
    { 
        question: 'Qual é o tempo estimado para a entrega do meu site?', 
        answer: 'O prazo médio é de 4 a 6 semanas. Esse tempo é necessário para cumprirmos todas as etapas de estratégia, design e otimização que garantem um site de alta performance.' 
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <S.FAQSection id="faq">
            <div className='container'>
                <S.SectionHeader>
                    <S.SectionSubtitle>Transparência Total</S.SectionSubtitle>
                    <S.SectionTitle>Dúvidas <S.Highlight>Frequentes</S.Highlight></S.SectionTitle>
                </S.SectionHeader>
                <S.QuestionsContainer>
                    {questions.map((item, index) => (
                        <S.QuestionItem key={index} $active={activeIndex === index}>
                            <S.Question onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                                {item.question}
                                <S.ToggleIcon $active={activeIndex === index}>
                                    <ChevronDown size={22} />
                                </S.ToggleIcon>
                            </S.Question>
                            <S.Answer $active={activeIndex === index}>
                                <div className="answer-content">
                                    {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                                </div>
                            </S.Answer>
                        </S.QuestionItem>
                    ))}
                </S.QuestionsContainer>
            </div>
        </S.FAQSection>
    );
};

export default FAQ;