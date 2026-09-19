import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {
  it('renders a BodySection and passes the props through to it', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find('div.bodySectionWithMargin')).toHaveLength(1);

    const section = wrapper.find(BodySection);
    expect(section).toHaveLength(1);
    expect(section.props().title).toBe('test title');

    const rendered = section.dive();
    expect(rendered.find('h2').text()).toBe('test title');
    expect(rendered.find('p').text()).toBe('test children node');
  });
});
