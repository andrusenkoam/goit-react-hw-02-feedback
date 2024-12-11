import PropTypes from 'prop-types';
import { NotificationMessage } from './Notofocation.styled';

export const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
