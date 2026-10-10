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
  notifications: [
    { id: 1, isRead: false, type: 'default', value: 'New course available' },
    { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
    { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
  ],
};

describe('notificationReducer', () => {
  it('returns the initial state by default', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
    expect(initialState).toEqual({ notifications: [], filter: 'DEFAULT' });
  });

  it('returns the data with isRead set to false on FETCH_NOTIFICATIONS_SUCCESS', () => {
    expect(
      notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data })
    ).toEqual(fetched);
  });

  it('marks the right notification as read on MARK_AS_READ', () => {
    expect(
      notificationReducer(fetched, { type: MARK_AS_READ, index: 2 })
    ).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    });
  });

  it('updates the filter on SET_TYPE_FILTER', () => {
    expect(
      notificationReducer(fetched, { type: SET_TYPE_FILTER, filter: 'URGENT' })
    ).toEqual({
      ...fetched,
      filter: 'URGENT',
    });
  });

  it('does not mutate the state it is given', () => {
    const state = {
      ...fetched,
      notifications: fetched.notifications.map((item) => ({ ...item })),
    };
    notificationReducer(state, { type: MARK_AS_READ, index: 2 });
    expect(state).toEqual(fetched);
  });
});
