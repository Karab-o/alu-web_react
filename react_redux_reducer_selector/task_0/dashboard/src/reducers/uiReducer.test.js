import uiReducer, { initialState } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseActionTypes';

describe('uiReducer', () => {
  it('returns the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('returns the initial state when SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: SELECT_COURSE, index: 1 })).toEqual(
      initialState
    );
  });

  it('sets isNotificationDrawerVisible to true on DISPLAY_NOTIFICATION_DRAWER', () => {
    expect(
      uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER })
    ).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });

  it('sets isNotificationDrawerVisible to false on HIDE_NOTIFICATION_DRAWER', () => {
    const visible = { ...initialState, isNotificationDrawerVisible: true };
    expect(uiReducer(visible, { type: HIDE_NOTIFICATION_DRAWER })).toEqual(
      initialState
    );
  });

  it('sets isUserLoggedIn to true on LOGIN_SUCCESS', () => {
    expect(uiReducer(undefined, { type: LOGIN_SUCCESS })).toEqual({
      ...initialState,
      isUserLoggedIn: true,
    });
  });

  it('sets isUserLoggedIn to false on LOGIN_FAILURE', () => {
    const loggedIn = { ...initialState, isUserLoggedIn: true };
    expect(uiReducer(loggedIn, { type: LOGIN_FAILURE })).toEqual(initialState);
  });

  it('sets isUserLoggedIn to false on LOGOUT', () => {
    const loggedIn = { ...initialState, isUserLoggedIn: true };
    expect(uiReducer(loggedIn, { type: LOGOUT })).toEqual(initialState);
  });

  it('does not mutate the state it is given', () => {
    const state = { ...initialState };
    uiReducer(state, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual(initialState);
  });
});
