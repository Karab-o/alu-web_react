import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Babel wraps the imported JSON array in a module namespace object, so the
// array itself is on `default` once the file goes through the ES module interop.
const notifications = notificationsData.default || notificationsData;

export const user = new schema.Entity('users');

export const message = new schema.Entity(
  'messages',
  {},
  { idAttribute: 'guid' }
);

export const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export function notificationsNormalizer(data) {
  return normalize(data, [notification]);
}

export const normalizedNotifications = notificationsNormalizer(notifications);

export function getAllNotificationsByUser(userId) {
  const { notifications: normalizedById, messages } =
    normalizedNotifications.entities;

  return Object.values(normalizedById).reduce(
    (contexts, item) =>
      item.author === userId ? [...contexts, messages[item.context]] : contexts,
    []
  );
}

export default normalizedNotifications;
