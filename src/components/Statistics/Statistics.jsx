import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { StatisticsItem, StatisticsText } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Section title="Statistics">
      {total ? (
        <ul>
          <StatisticsItem>
            <StatisticsText>Good: {good}</StatisticsText>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsText>Neutral: {neutral}</StatisticsText>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsText>Bad: {bad}</StatisticsText>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsText>Total: {total}</StatisticsText>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsText>
              Positive feedback: {positivePercentage}%
            </StatisticsText>
          </StatisticsItem>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
