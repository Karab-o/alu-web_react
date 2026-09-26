import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import { user } from './AppContext';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const loggedInUser = {
  email: 'user@example.com',
  password: 'secret',
  isLoggedIn: true,
};

const logInThroughState = (wrapper) => {
  wrapper.setState({
    value: { ...wrapper.state().value, user: loggedInUser },
  });
};

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('contains the Login component, wrapped with logging', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('WithLogging(Login)')).toHaveLength(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('does not display CourseList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });
});

describe('App when the user is logged in', () => {
  it('does not include the Login component', () => {
    const wrapper = shallow(<App />);
    logInThroughState(wrapper);
    expect(wrapper.find('WithLogging(Login)')).toHaveLength(0);
  });

  it('includes the CourseList component', () => {
    const wrapper = shallow(<App />);
    logInThroughState(wrapper);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});

describe('App body sections', () => {
  it('wraps Login in "Log in to continue" and shows the news section', () => {
    const wrapper = shallow(<App />);
    const titles = wrapper
      .find(BodySectionWithMarginBottom)
      .map((section) => section.props().title);
    expect(titles).toEqual(['Log in to continue']);
    expect(wrapper.find(BodySection).props().title).toBe(
      'News from the School'
    );
  });

  it('wraps CourseList in "Course list" when logged in', () => {
    const wrapper = shallow(<App />);
    logInThroughState(wrapper);
    const section = wrapper.find(BodySectionWithMarginBottom);
    expect(section.props().title).toBe('Course list');
    expect(section.find(CourseList)).toHaveLength(1);
  });
});

describe('App displayDrawer state', () => {
  it('has displayDrawer false by default and true after handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);

    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it('sets displayDrawer to false after handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });

    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });
});

describe('App logIn and logOut', () => {
  it('has the default user in the state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().value.user).toEqual(user);
  });

  it('logIn updates the user in the state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('user@example.com', 'secret');
    expect(wrapper.state().value.user).toEqual(loggedInUser);
  });

  it('logOut resets the user in the state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('user@example.com', 'secret');

    wrapper.instance().logOut();
    expect(wrapper.state().value.user).toEqual(user);
  });
});

describe('App keyboard shortcut', () => {
  it('logs the user out and alerts "Logging you out" when control and h are pressed', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const wrapper = mount(<App />);
    wrapper.instance().logIn('user@example.com', 'secret');

    document.dispatchEvent(
      new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' })
    );

    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    expect(wrapper.state().value.user).toEqual(user);

    wrapper.unmount();
    alertSpy.mockRestore();
    logSpy.mockRestore();
  });
});
