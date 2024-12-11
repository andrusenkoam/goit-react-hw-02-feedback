import styled from 'styled-components';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const FeedbackOptionsItem = styled.li`
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

export const OptionBtn = styled.button`
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 4px;
  min-width: 80px;
  background-color: ${function ({ children }) {
    switch (children) {
      case 'Good':
        return 'lightGreen';
      case 'Neutral':
        return 'lightBlue';
      case 'Bad':
        return 'red';
      default:
        return 'white';
    }
  }};
  font-size: 18px;
`;
