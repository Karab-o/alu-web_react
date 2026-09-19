import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value, id, markAsRead }) {
  return html ? (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    />
  ) : (
    <li data-notification-type={type} onClick={() => markAsRead(id)}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: null,
  value: '',
  id: 0,
  markAsRead: () => {},
};

export default React.memo(NotificationItem);
