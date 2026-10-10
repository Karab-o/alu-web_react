import uiReducer, { initialState } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseActionTypes';

const initialStateJS = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

describe('uiReducer', () => {
  it('returns the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialStateJS);
  });

  it('returns the initial state when SELECT_COURSE is passed', () => {
    expect(
      uiReducer(undefined, { type: SELECT_COURSE, index: 1 }).toJS()
    ).toEqual(initialStateJS);
  });

  it('sets isNotificationDrawerVisible to true on DISPLAY_NOTIFICATION_DRAWER', () => {
    expect(
      uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER }).toJS()
    ).toEqual({
      ...initialStateJS,
      isNotificationDrawerVisible: true,
    });
  });

  it('sets isNotificationDrawerVisible to false on HIDE_NOTIFICATION_DRAWER', () => {
    const visible = initialState.set('isNotificationDrawerVisible', true);
    expect(uiReducer(visible, { type: HIDE_NOTIFICATION_DRAWER }).toJS()).toEqual(
      initialStateJS
    );
  });

  it('sets isUserLoggedIn to true on LOGIN_SUCCESS', () => {
    expect(uiReducer(undefined, { type: LOGIN_SUCCESS }).toJS()).toEqual({
      ...initialStateJS,
      isUserLoggedIn: true,
    });
  });

  it('sets isUserLoggedIn to false on LOGIN_FAILURE', () => {
    const loggedIn = initialState.set('isUserLoggedIn', true);
    expect(uiReducer(loggedIn, { type: LOGIN_FAILURE }).toJS()).toEqual(
      initialStateJS
    );
  });

  it('sets isUserLoggedIn to false on LOGOUT', () => {
    const loggedIn = initialState.set('isUserLoggedIn', true);
    expect(uiReducer(loggedIn, { type: LOGOUT }).toJS()).toEqual(
      initialStateJS
    );
  });

  it('returns a new Map instead of mutating the state', () => {
    const next = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(next).not.toBe(initialState);
    expect(initialState.get('isNotificationDrawerVisible')).toBe(false);
  });
});
