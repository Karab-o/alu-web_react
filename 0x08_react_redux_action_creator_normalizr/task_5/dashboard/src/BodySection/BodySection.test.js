import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('renders the children and one h2 element correctly', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    expect(wrapper.find('div.bodySection')).toHaveLength(1);

    const h2 = wrapper.find('h2');
    expect(h2).toHaveLength(1);
    expect(h2.text()).toBe('test title');

    const p = wrapper.find('p');
    expect(p).toHaveLength(1);
    expect(p.text()).toBe('test children node');
  });
});
