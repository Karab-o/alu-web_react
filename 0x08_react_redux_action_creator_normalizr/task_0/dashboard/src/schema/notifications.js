import * as notificationsData from '../../notifications.json';

// Babel wraps the imported JSON array in a module namespace object, so the
// array itself is on `default` once the file goes through the ES module interop.
const notifications = notificationsData.default || notificationsData;

export function getAllNotificationsByUser(userId) {
  return notifications
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

export default notifications;
