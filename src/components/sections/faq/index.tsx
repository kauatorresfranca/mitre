import { useState } from 'react';
import * as S from './styles';
import { ChevronDown } from 'lucide-react';

const questions = [
    { question: 'Qual o prazo médio de entrega?', answer: 'Nosso prazo varia de 4 a 6 semanas para garantir a máxima qualidade e performance.' },
    { question: 'Como funciona o pagamento?', answer: 'Trabalhamos com entrada + entrega ou parcelamento via cartão de crédito.' },
    { question: 'Tenho suporte após o site pronto?', answer: 'Sim, você tem 30 dias de suporte total para qualquer ajuste ou dúvida técnica.' },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <S.FAQSection>
            <div className='container'>
                <S.SectionHeader>
                    <S.SectionTitle>Dúvidas <S.Highlight>Frequentes</S.Highlight></S.SectionTitle>
                </S.SectionHeader>
                <S.QuestionsContainer>
                    {questions.map((item, index) => (
                        <S.QuestionItem key={index} $active={activeIndex === index}>
                            <S.Question onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                                {item.question}
                                <S.ToggleIcon $active={activeIndex === index}>
                                    <ChevronDown size={24} />
                                </S.ToggleIcon>
                            </S.Question>
                            <S.Answer $active={activeIndex === index}>
                                <p>{item.answer}</p>
                            </S.Answer>
                        </S.QuestionItem>
                    ))}
                </S.QuestionsContainer>
            </div>
        </S.FAQSection>
    );
};

export default FAQ;