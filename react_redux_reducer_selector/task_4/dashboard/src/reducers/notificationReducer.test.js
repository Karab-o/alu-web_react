import notificationReducer, { initialState } from './notificationReducer';
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

const fetched = {
  filter: 'DEFAULT',
  notifications: {
    1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
    2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
    3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
  },
};

const fetchedState = () =>
  notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data });

describe('notificationReducer', () => {
  it('returns the initial state by default', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
    expect(notificationReducer(undefined, {}).toJS()).toEqual({
      notifications: {},
      filter: 'DEFAULT',
    });
  });

  it('normalizes the data and sets isRead to false on FETCH_NOTIFICATIONS_SUCCESS', () => {
    expect(fetchedState().toJS()).toEqual(fetched);
  });

  it('marks the right notification as read on MARK_AS_READ', () => {
    const state = notificationReducer(fetchedState(), {
      type: MARK_AS_READ,
      index: 2,
    });

    expect(state.toJS()).toEqual({
      ...fetched,
      notifications: {
        ...fetched.notifications,
        2: {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'New resume available',
        },
      },
    });
  });

  it('updates the filter on SET_TYPE_FILTER', () => {
    const state = notificationReducer(fetchedState(), {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    });

    expect(state.toJS()).toEqual({ ...fetched, filter: 'URGENT' });
  });

  it('returns a new Map instead of mutating the state', () => {
    const state = fetchedState();
    const next = notificationReducer(state, { type: MARK_AS_READ, index: 2 });

    expect(next).not.toBe(state);
    expect(state.getIn(['notifications', '2', 'isRead'])).toBe(false);
  });
});
