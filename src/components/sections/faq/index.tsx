// src/components/FAQ/index.tsx
import * as S from './styles';
// import { ChevronDown } from 'lucide-react'; // Para o ícone de expansão

const questions = [
    {
        question: 'Qual o prazo médio de entrega de uma Landing Page de Alta Conversão?',
        answer: 'Nosso prazo varia de 4 a 6 semanas, dependendo da complexidade do projeto e da agilidade na entrega do conteúdo e feedback do cliente. O foco é performance, não pressa.',
    },
    {
        question: 'O valor do investimento está incluso no diagnóstico gratuito?',
        answer: 'Não. O diagnóstico gratuito é uma imersão na sua dor e nicho. Ao final, apresentamos um escopo com a solução ideal, que inclui o valor do investimento, baseado nas suas necessidades específicas.',
    },
    {
        question: 'Vocês oferecem suporte pós-lançamento?',
        answer: 'Sim. Incluímos 30 dias de suporte e garantia após o lançamento. Nosso objetivo é que você atinja a referência do seu nicho, e isso exige monitoramento e eventuais ajustes finos.',
    },
    {
        question: 'É necessário ter o conteúdo e copy prontos antes de começar?',
        answer: 'Não, mas é altamente recomendado! Embora possamos dar orientações, o ideal é que você tenha a copy que mais conhece sua dor pronta para focarmos apenas na estratégia e design de conversão.',
    },
];

const FAQ = () => {
    return (
        <S.FAQSection>
            <div className='container'>
                <S.SectionHeader>
                    <S.SectionSubtitle>
                        A clareza que elimina as últimas dúvidas.
                    </S.SectionSubtitle>
                    <S.SectionTitle>
                        Perguntas Frequentes <S.Highlight>e Nossas Respostas</S.Highlight>
                    </S.SectionTitle>
                </S.SectionHeader>
                
                <S.QuestionsContainer>
                    {questions.map((item, index) => (
                        <S.QuestionItem key={index}>
                            <S.Question>
                                {item.question}
                                <S.ToggleIcon>
                                    {/* <ChevronDown size={20} /> */}
                                    +
                                </S.ToggleIcon>
                            </S.Question>
                            {/* Assumindo que a resposta só aparece ao clicar (state control) */}
                            <S.Answer>
                                {item.answer}
                            </S.Answer>
                        </S.QuestionItem>
                    ))}
                </S.QuestionsContainer>
            </div>
        </S.FAQSection>
    );
};

export default FAQ;