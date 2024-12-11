import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';
import {
  FeedbackOptionsList,
  FeedbackOptionsItem,
  OptionBtn,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <FeedbackOptionsList>
        {options.map(option => (
          <FeedbackOptionsItem key={option}>
            <OptionBtn type="button" onClick={() => onLeaveFeedback(option)}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </OptionBtn>
          </FeedbackOptionsItem>
        ))}
      </FeedbackOptionsList>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
