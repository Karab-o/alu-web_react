import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

describe('uiActionCreators', () => {
  it('login returns a LOGIN action with the user credentials', () => {
    expect(login('larry@hudson.io', 'secret')).toEqual({
      type: LOGIN,
      user: {
        email: 'larry@hudson.io',
        password: 'secret',
      },
    });
  });

  it('logout returns a LOGOUT action', () => {
    expect(logout()).toEqual({
      type: LOGOUT,
    });
  });

  it('displayNotificationDrawer returns a DISPLAY_NOTIFICATION_DRAWER action', () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it('hideNotificationDrawer returns a HIDE_NOTIFICATION_DRAWER action', () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});
