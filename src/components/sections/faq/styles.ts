import styled from 'styled-components';
import { colors } from '../../../../styles'; 

export const FAQSection = styled.section`
    padding: 100px 0;
    background: ${colors.white};
`;

export const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 50px;
`;

export const SectionTitle = styled.h2`
    font-size: 38px;
    font-weight: 800;
`;

export const Highlight = styled.span`
    color: ${colors.primary};
`;

export const QuestionsContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

export const QuestionItem = styled.div<{ $active: boolean }>`
    border-bottom: 1px solid #eee;
    background: ${props => props.$active ? colors.background : 'transparent'};
    border-radius: 8px;
    transition: 0.3s;
`;

export const Question = styled.div`
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: 700;
    font-size: 18px;
`;

export const ToggleIcon = styled.div<{ $active: boolean }>`
    transform: rotate(${props => props.$active ? '180deg' : '0'});
    transition: 0.3s;
    color: ${colors.primary};
`;

export const Answer = styled.div<{ $active: boolean }>`
    max-height: ${props => props.$active ? '200px' : '0'};
    overflow: hidden;
    padding: ${props => props.$active ? '0 24px 24px' : '0 24px'};
    opacity: ${props => props.$active ? '1' : '0'};
    transition: all 0.3s ease-in-out;
    p { color: #666; line-height: 1.6; }
`;