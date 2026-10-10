import { Map } from 'immutable';

export function filterTypeSelected(state) {
  return state.get('filter');
}

export function getNotifications(state) {
  return state.get('notifications') || Map();
}

export function getUnreadNotifications(state) {
  return getNotifications(state).filter(
    (notification) => !notification.get('isRead')
  );
}
