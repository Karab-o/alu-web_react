import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import AppContext, { user, logOut } from '../App/AppContext';

describe('Footer', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });

  it('renders the text "Copyright"', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
    wrapper.unmount();
  });
});

describe('Footer contact link', () => {
  it('is not displayed when the user is logged out', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a')).toHaveLength(0);
    expect(wrapper.text()).not.toContain('Contact us');
    wrapper.unmount();
  });

  it('is displayed when the user is logged in', () => {
    const value = {
      user: { email: 'user@example.com', password: 'secret', isLoggedIn: true },
      logOut,
    };
    const wrapper = mount(
      <AppContext.Provider value={value}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').text()).toBe('Contact us');
    wrapper.unmount();
  });
});
