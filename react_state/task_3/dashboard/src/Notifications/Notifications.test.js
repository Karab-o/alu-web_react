import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<u>test</u>' } },
];

describe('Notifications', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Notifications when displayDrawer is false', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={false} />);
  });

  it('displays the menu item', () => {
    const menuItem = wrapper.find('div[className^="menuItem"]');
    expect(menuItem).toHaveLength(1);
    expect(menuItem.prop('className')).not.toContain('menuItemHidden');
  });

  it('does not display div.Notifications', () => {
    expect(wrapper.find('div[className^="notifications"]')).toHaveLength(0);
  });
});

describe('Notifications when displayDrawer is true', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
  });

  it('hides the menu item', () => {
    const menuItem = wrapper.find('div[className^="menuItem"]');
    expect(menuItem).toHaveLength(1);
    expect(menuItem.prop('className')).toContain('menuItemHidden');
  });

  it('displays div.Notifications', () => {
    expect(wrapper.find('div[className^="notifications"]')).toHaveLength(1);
  });
});

describe('Notifications with an empty listNotifications', () => {
  it('renders correctly with an empty array or no listNotifications prop', () => {
    const withoutProp = shallow(<Notifications displayDrawer={true} />);
    expect(withoutProp.exists()).toBe(true);
    expect(withoutProp.find(NotificationItem)).toHaveLength(0);

    const withEmptyArray = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    expect(withEmptyArray.exists()).toBe(true);
    expect(withEmptyArray.find(NotificationItem)).toHaveLength(0);
  });

  it('displays "No new notification for now" instead of the list title', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    expect(wrapper.text()).not.toContain('Here is the list of notifications');
    expect(wrapper.find('p').text()).toBe('No new notification for now');
  });
});

describe('Notifications with listNotifications containing elements', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
  });

  it('renders the right number of NotificationItem elements', () => {
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });
});

describe('Notifications markNotificationAsRead', () => {
  it('passes markNotificationAsRead to each NotificationItem', () => {
    const markNotificationAsRead = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsRead}
      />
    );

    wrapper.find(NotificationItem).forEach((item) => {
      expect(item.prop('markAsRead')).toBe(markNotificationAsRead);
    });

    wrapper.find(NotificationItem).at(1).prop('markAsRead')(2);
    expect(markNotificationAsRead).toHaveBeenCalledWith(2);
  });
});

describe('Notifications drawer handlers', () => {
  it('calls handleDisplayDrawer when clicking on the menu item', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );

    wrapper.find('div[className^="menuItem"]').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });

  it('calls handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );

    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
  });
});

describe('Notifications re-rendering', () => {
  let renderSpy;

  beforeEach(() => {
    renderSpy = jest.spyOn(Notifications.prototype, 'render');
  });

  afterEach(() => {
    renderSpy.mockRestore();
  });

  it('does not rerender when updated with the same list', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(renderSpy).toHaveBeenCalledTimes(1);

    wrapper.setProps({ listNotifications });
    expect(renderSpy).toHaveBeenCalledTimes(1);
  });

  it('rerenders when updated with a longer list', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(renderSpy).toHaveBeenCalledTimes(1);

    wrapper.setProps({
      listNotifications: [
        ...listNotifications,
        { id: 4, type: 'default', value: 'Foo' },
      ],
    });
    expect(renderSpy).toHaveBeenCalledTimes(2);
    expect(wrapper.find(NotificationItem)).toHaveLength(4);
  });

  it('rerenders when a notification is removed from the list', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    wrapper.setProps({ listNotifications: listNotifications.slice(1) });
    expect(renderSpy).toHaveBeenCalledTimes(2);
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
  });

  it('rerenders when displayDrawer changes', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    wrapper.setProps({ displayDrawer: true });
    expect(renderSpy).toHaveBeenCalledTimes(2);
  });
});
