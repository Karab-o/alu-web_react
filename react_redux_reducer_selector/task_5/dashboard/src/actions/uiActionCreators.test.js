import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
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

  it('loginSuccess returns a LOGIN_SUCCESS action', () => {
    expect(loginSuccess()).toEqual({
      type: LOGIN_SUCCESS,
    });
  });

  it('loginFailure returns a LOGIN_FAILURE action', () => {
    expect(loginFailure()).toEqual({
      type: LOGIN_FAILURE,
    });
  });
});

describe('loginRequest', () => {
  const mockStore = configureStore([thunk]);
  const email = 'poole.sanders@holberton.nz';
  const password = 'pwd';

  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN then LOGIN_SUCCESS when the API answers', async () => {
    fetchMock.getOnce('/login-success.json', {
      status: 200,
      body: { email, password },
    });

    const store = mockStore({});
    await store.dispatch(loginRequest(email, password));

    expect(store.getActions()).toEqual([
      { type: LOGIN, user: { email, password } },
      { type: LOGIN_SUCCESS },
    ]);
  });

  it('dispatches LOGIN then LOGIN_FAILURE when the API fails', async () => {
    fetchMock.get('/login-success.json', 404);

    const store = mockStore({});
    await store.dispatch(loginRequest(email, password));

    expect(store.getActions()).toEqual([
      { type: LOGIN, user: { email, password } },
      { type: LOGIN_FAILURE },
    ]);
  });
});
