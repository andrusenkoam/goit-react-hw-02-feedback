import styled from 'styled-components';

export const StatisticsList = styled.ul`
  padding-left: 70px;
`;

export const StatisticsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  & p {
    font-size: 18px;
  }
`;
