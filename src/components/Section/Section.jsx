import PropTypes from 'prop-types';
import { Container, SectionTitle, SectionWraper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWraper>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </Container>
    </SectionWraper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
