import { bindActionCreators, createStore } from 'redux';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

// A store is needed to bind the creators to a dispatch. The reducers arrive in
// the next project, so this one only has to be dispatchable.
const store = createStore((state = {}) => state);


export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export const boundUIActionCreators = bindActionCreators(
  { login, logout, displayNotificationDrawer, hideNotificationDrawer },
  store.dispatch
);

export const boundLogin = boundUIActionCreators.login;
export const boundLogout = boundUIActionCreators.logout;
export const boundDisplayNotificationDrawer =
  boundUIActionCreators.displayNotificationDrawer;
export const boundHideNotificationDrawer =
  boundUIActionCreators.hideNotificationDrawer;
