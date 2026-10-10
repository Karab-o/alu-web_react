import { bindActionCreators, createStore } from 'redux';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

// A store is needed to bind the creators to a dispatch. The reducers arrive in
// the next project, so this one only has to be dispatchable.
const store = createStore((state = {}) => state);


export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

export const boundNotificationActionCreators = bindActionCreators(
  { markAsAread, setNotificationFilter },
  store.dispatch
);

export const boundMarkAsAread = boundNotificationActionCreators.markAsAread;
export const boundSetNotificationFilter =
  boundNotificationActionCreators.setNotificationFilter;
