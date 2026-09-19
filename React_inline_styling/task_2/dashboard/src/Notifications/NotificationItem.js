import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem({ type, html, value, id, markAsRead }) {
  const content = html ? { dangerouslySetInnerHTML: html } : { children: value };

  return (
    <li
      className={css(type === 'urgent' ? styles.urgent : styles.default)}
      data-notification-type={type}
      onClick={() => markAsRead(id)}
      {...content}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

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
