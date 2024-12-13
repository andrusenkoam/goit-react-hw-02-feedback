import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

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
        <StatisticsList>
          <StatisticsItem>
            <p>
              Good: <span>{good}</span>
            </p>
          </StatisticsItem>
          <StatisticsItem>
            <p>
              Neutral: <span>{neutral}</span>
            </p>
          </StatisticsItem>
          <StatisticsItem>
            <p>
              Bad: <span>{bad}</span>
            </p>
          </StatisticsItem>
          <StatisticsItem>
            <p>
              Total: <span>{total}</span>
            </p>
          </StatisticsItem>
          <StatisticsItem>
            <p>
              Positive feedback: <span>{positivePercentage}%</span>
            </p>
          </StatisticsItem>
        </StatisticsList>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
