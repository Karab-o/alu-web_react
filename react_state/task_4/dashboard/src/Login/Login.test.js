import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Login', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 2 input fields, 2 label tags and a submit input', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input#email')).toHaveLength(1);
    expect(wrapper.find('input#password')).toHaveLength(1);
    expect(wrapper.find('label')).toHaveLength(2);
    expect(wrapper.find('input[type="submit"]')).toHaveLength(1);
  });
});

describe('Login submit button', () => {
  it('is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('is enabled after changing the value of the two inputs', () => {
    const wrapper = shallow(<Login />);

    wrapper
      .find('input#email')
      .simulate('change', { target: { value: 'user@example.com' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);

    wrapper
      .find('input#password')
      .simulate('change', { target: { value: 'secret' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });

  it('is disabled again when one of the inputs is emptied', () => {
    const wrapper = shallow(<Login />);
    wrapper
      .find('input#email')
      .simulate('change', { target: { value: 'user@example.com' } });
    wrapper
      .find('input#password')
      .simulate('change', { target: { value: 'secret' } });

    wrapper.find('input#email').simulate('change', { target: { value: '' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });
});

describe('Login form submission', () => {
  it('calls logIn with the email and password and prevents the page reload', () => {
    const logIn = jest.fn();
    const wrapper = shallow(<Login logIn={logIn} />);
    const preventDefault = jest.fn();

    wrapper
      .find('input#email')
      .simulate('change', { target: { value: 'user@example.com' } });
    wrapper
      .find('input#password')
      .simulate('change', { target: { value: 'secret' } });
    wrapper.find('form').simulate('submit', { preventDefault });

    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(logIn).toHaveBeenCalledWith('user@example.com', 'secret');
  });
});
