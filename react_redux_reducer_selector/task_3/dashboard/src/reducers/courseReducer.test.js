import courseReducer from './courseReducer';
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';

const data = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const fetched = [
  { id: 1, name: 'ES6', isSelected: false, credit: 60 },
  { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
  { id: 3, name: 'React', isSelected: false, credit: 40 },
];

describe('courseReducer', () => {
  it('returns an empty array by default', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('returns the data with isSelected set to false on FETCH_COURSE_SUCCESS', () => {
    expect(courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data })).toEqual(
      fetched
    );
  });

  it('marks the right course as selected on SELECT_COURSE', () => {
    expect(courseReducer(fetched, { type: SELECT_COURSE, index: 2 })).toEqual([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ]);
  });

  it('marks the right course as unselected on UNSELECT_COURSE', () => {
    const selected = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    expect(courseReducer(selected, { type: UNSELECT_COURSE, index: 2 })).toEqual(
      fetched
    );
  });

  it('does not mutate the state it is given', () => {
    const state = fetched.map((course) => ({ ...course }));
    courseReducer(state, { type: SELECT_COURSE, index: 2 });
    expect(state).toEqual(fetched);
  });
});
