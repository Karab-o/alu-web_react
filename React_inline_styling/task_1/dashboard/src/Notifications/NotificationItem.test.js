import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct html with type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toBe(
      '<li data-notification-type="default">test</li>'
    );
  });

  it('renders the correct html with an html prop', () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    expect(wrapper.html()).toContain('<u>test</u>');
  });

  it('calls markAsRead with the right id when clicked', () => {
    const spy = jest.fn();
    const wrapper = shallow(
      <NotificationItem id={42} type="default" value="test" markAsRead={spy} />
    );
    wrapper.find('li').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(42);
  });
});
