import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';

export const initialState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
};

export default function notificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((notification) => ({
          ...notification,
          isRead: false,
        })),
      };
    case MARK_AS_READ: {
      // Keyed by id so marking one notification does not rebuild every item.
      const notifications = new Map(
        state.notifications.map((notification) => [
          notification.id,
          notification,
        ])
      );
      const notification = notifications.get(action.index);

      if (!notification) {
        return state;
      }

      notifications.set(action.index, { ...notification, isRead: true });

      return { ...state, notifications: [...notifications.values()] };
    }
    case SET_TYPE_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}
