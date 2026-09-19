import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('CourseList', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
});

describe('CourseList with an empty listCourses', () => {
  it('renders correctly with an empty array or no listCourses prop', () => {
    const withoutProp = shallow(<CourseList />);
    expect(withoutProp.find(CourseListRow)).toHaveLength(3);
    expect(withoutProp.find(CourseListRow).at(2).props().textFirstCell).toBe(
      'No course available yet'
    );

    const withEmptyArray = shallow(<CourseList listCourses={[]} />);
    expect(withEmptyArray.find(CourseListRow).at(2).props().textFirstCell).toBe(
      'No course available yet'
    );
  });
});

describe('CourseList with listCourses containing elements', () => {
  it('renders one row per course with its name and credits', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    const rows = wrapper.find(CourseListRow);
    expect(rows.at(2).props().textFirstCell).toBe('ES6');
    expect(rows.at(2).props().textSecondCell).toBe(60);
    expect(rows.at(4).props().textFirstCell).toBe('React');
  });
});
