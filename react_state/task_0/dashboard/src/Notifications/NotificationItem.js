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

const screenSmall = '@media (max-width: 900px)';

const smallScreenItem = {
  width: '100%',
  borderBottom: '1px solid black',
  fontSize: '20px',
  padding: '10px 8px',
  listStyle: 'none',
  boxSizing: 'border-box',
};

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    [screenSmall]: smallScreenItem,
  },
  urgent: {
    color: 'red',
    [screenSmall]: smallScreenItem,
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
