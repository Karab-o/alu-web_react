import { Map } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';
import notificationReducer from '../reducers/notificationReducer';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes';

const data = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', value: 'New data available' },
];

const buildState = () =>
  notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data });

describe('filterTypeSelected', () => {
  it('returns the filter of the state', () => {
    expect(filterTypeSelected(buildState())).toBe('DEFAULT');
  });

  it('returns the filter after it has been changed', () => {
    const state = notificationReducer(buildState(), {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    });

    expect(filterTypeSelected(state)).toBe('URGENT');
  });
});

describe('getNotifications', () => {
  it('returns every notification of the state as a Map', () => {
    const notifications = getNotifications(buildState());

    expect(Map.isMap(notifications)).toBe(true);
    expect(notifications.size).toBe(3);
    expect(notifications.toJS()).toEqual({
      1: {
        id: 1,
        isRead: false,
        type: 'default',
        value: 'New course available',
      },
      2: {
        id: 2,
        isRead: false,
        type: 'urgent',
        value: 'New resume available',
      },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });
  });
});

describe('getUnreadNotifications', () => {
  it('returns every notification when none has been read', () => {
    expect(getUnreadNotifications(buildState()).size).toBe(3);
  });

  it('leaves out the notifications that have been read', () => {
    const state = notificationReducer(buildState(), {
      type: MARK_AS_READ,
      index: 2,
    });
    const unread = getUnreadNotifications(state);

    expect(Map.isMap(unread)).toBe(true);
    expect(unread.size).toBe(2);
    expect(unread.toJS()).toEqual({
      1: {
        id: 1,
        isRead: false,
        type: 'default',
        value: 'New course available',
      },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });
  });
});
