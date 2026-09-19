import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

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

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
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

describe('App when isLoggedIn is true', () => {
  it('does not include the Login component', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  it('includes the CourseList component', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});

describe('App keyboard shortcut', () => {
  it('calls logOut and alerts "Logging you out" when control and h are pressed', () => {
    const logOut = jest.fn();
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = mount(<App logOut={logOut} />);

    document.dispatchEvent(
      new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' })
    );

    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    expect(logOut).toHaveBeenCalledTimes(1);

    alertSpy.mockRestore();
    wrapper.unmount();
  });
});
