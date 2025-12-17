import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles'; 

export const FAQSection = styled.section`
    padding: 100px 0;
    background-color: ${colors.white};
`;

export const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 60px;
`;

export const SectionSubtitle = styled.p`
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${colors.primary};
    margin-bottom: 12px;
`;

export const SectionTitle = styled.h2`
    font-size: 38px;
    font-weight: 800;
    color: ${colors.text};
`;

export const Highlight = styled.span`
    background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
`;

export const QuestionsContainer = styled.div`
    max-width: 850px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const QuestionItem = styled.div<{ $active: boolean }>`
    background: ${props => props.$active ? colors.background : colors.white};
    border-radius: 16px;
    border: 1px solid ${props => props.$active ? colors.primary + '30' : colors.lightGray + '40'};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;

    &:hover {
        border-color: ${colors.primary}60;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    }
`;

export const Question = styled.div`
    padding: 24px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: 700;
    font-size: 18px;
    color: ${colors.text};

    @media (max-width: ${breakpoints.mobile}) {
        padding: 20px;
        font-size: 16px;
    }
`;

export const ToggleIcon = styled.div<{ $active: boolean }>`
    transform: rotate(${props => props.$active ? '180deg' : '0'});
    transition: transform 0.4s ease;
    color: ${colors.primary};
    flex-shrink: 0;
    margin-left: 15px;
`;

export const Answer = styled.div<{ $active: boolean }>`
    max-height: ${props => props.$active ? '600px' : '0'};
    opacity: ${props => props.$active ? '1' : '0'};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    
    .answer-content {
        padding: 0 30px 24px;
        color: ${colors.text};
        opacity: 0.8;
        line-height: 1.7;
        font-size: 16px;

        strong {
            color: ${colors.primary};
            font-weight: 700;
        }

        li {
            margin-bottom: 8px;
            position: relative;
            padding-left: 15px;

            &:before {
                content: '•';
                position: absolute;
                left: 0;
                color: ${colors.primary};
                font-weight: bold;
            }
        }
    }
`;