import React from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import AppContext, { user, logOut } from '../App/AppContext';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Header', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });

  it('renders an img and a h1 tag', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
    wrapper.unmount();
  });
});

describe('Header with context', () => {
  it('does not create logoutSection with the default context value', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
    wrapper.unmount();
  });

  it('creates logoutSection when the user is logged in', () => {
    const value = {
      user: { email: 'user@example.com', password: 'secret', isLoggedIn: true },
      logOut,
    };
    const wrapper = mount(
      <AppContext.Provider value={value}>
        <Header />
      </AppContext.Provider>
    );
    const section = wrapper.find('#logoutSection');
    expect(section).toHaveLength(1);
    expect(section.text()).toContain('Welcome user@example.com');
    wrapper.unmount();
  });

  it('calls logOut when clicking on the logout link', () => {
    const logOutSpy = jest.fn();
    const value = {
      user: { email: 'user@example.com', password: 'secret', isLoggedIn: true },
      logOut: logOutSpy,
    };
    const wrapper = mount(
      <AppContext.Provider value={value}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find('#logoutSection a').simulate('click');
    expect(logOutSpy).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
});
