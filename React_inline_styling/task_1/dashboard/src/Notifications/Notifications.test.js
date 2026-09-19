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
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
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

  it('displays the menu item', () => {
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
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

describe('Notifications markAsRead', () => {
  it('logs the right message to the console', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    wrapper.instance().markAsRead(1);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Notification 1 has been marked as read'
    );
    consoleSpy.mockRestore();
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
});
