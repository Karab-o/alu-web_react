import React from 'react';

function NotificationItem({ type, html, value }) {
  return html ? (
    <li data-notification-type={type} dangerouslySetInnerHTML={html} />
  ) : (
    <li data-notification-type={type}>{value}</li>
  );
}

export default NotificationItem;
