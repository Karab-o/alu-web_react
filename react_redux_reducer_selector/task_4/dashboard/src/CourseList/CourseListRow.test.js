import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseListRow from './CourseListRow';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseListRow when isHeader is true', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Available courses" />
    );
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toBe('2');
  });

  it('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Course name"
        textSecondCell="Credit"
      />
    );
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('applies the header row style', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Available courses" />
    );
    expect(wrapper.find('tr').prop('className')).toMatch(/^headerRow_/);
  });

  it('applies the full-width style to a th spanning both columns', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Available courses" />
    );
    expect(wrapper.find('th').prop('className')).toContain('headerCellFull');
  });

  it('does not apply the full-width style to two-column th elements', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Course name"
        textSecondCell="Credit"
      />
    );
    wrapper.find('th').forEach((th) => {
      expect(th.prop('className')).toContain('headerCell');
      expect(th.prop('className')).not.toContain('headerCellFull');
    });
  });
});

describe('CourseListRow when isHeader is false', () => {
  it('renders two td elements within a tr element', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
    );
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('tr td')).toHaveLength(2);
  });

  it('applies the default row style', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
    );
    expect(wrapper.find('tr').prop('className')).toMatch(/^row_/);
  });

  it('renders an unchecked checkbox in the first cell', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
    );
    const checkbox = wrapper.find('td').first().find('input[type="checkbox"]');
    expect(checkbox).toHaveLength(1);
    expect(checkbox.prop('checked')).toBe(false);
  });

  it('toggles the checkbox and the rowChecked style', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
    );

    wrapper.find('input[type="checkbox"]').simulate('change');
    expect(wrapper.find('input[type="checkbox"]').prop('checked')).toBe(true);
    expect(wrapper.find('tr').prop('className')).toContain('rowChecked');

    wrapper.find('input[type="checkbox"]').simulate('change');
    expect(wrapper.find('input[type="checkbox"]').prop('checked')).toBe(false);
    expect(wrapper.find('tr').prop('className')).not.toContain('rowChecked');
  });
});
