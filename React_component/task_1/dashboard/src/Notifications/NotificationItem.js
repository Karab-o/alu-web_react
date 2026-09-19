import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  return html ? (
    <li data-notification-type={type} dangerouslySetInnerHTML={html} />
  ) : (
    <li data-notification-type={type}>{value}</li>
  );
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: null,
  value: '',
};

export default NotificationItem;
