import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs "Component" on mount and unmount when wrapping pure html', () => {
    const Wrapped = WithLogging(() => <p />);
    const wrapper = mount(<Wrapped />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith(
      'Component Component is going to unmount'
    );
  });

  it('logs the component name on mount and unmount when wrapping Login', () => {
    const Wrapped = WithLogging(Login);
    const wrapper = mount(<Wrapped />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith(
      'Component Login is going to unmount'
    );
  });

  it('sets displayName to WithLogging(NAME)', () => {
    expect(WithLogging(Login).displayName).toBe('WithLogging(Login)');
    expect(WithLogging(() => <p />).displayName).toBe(
      'WithLogging(Component)'
    );
  });
});
