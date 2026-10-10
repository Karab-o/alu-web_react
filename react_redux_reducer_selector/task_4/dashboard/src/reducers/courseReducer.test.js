import courseReducer, { initialState } from './courseReducer';
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

const fetched = {
  1: { id: 1, name: 'ES6', isSelected: false, credit: 60 },
  2: { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
  3: { id: 3, name: 'React', isSelected: false, credit: 40 },
};

const fetchedState = () =>
  courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data });

describe('courseReducer', () => {
  it('returns an empty Map by default', () => {
    expect(courseReducer(undefined, {}).toJS()).toEqual({});
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });

  it('normalizes the data and sets isSelected to false on FETCH_COURSE_SUCCESS', () => {
    expect(fetchedState().toJS()).toEqual(fetched);
  });

  it('marks the right course as selected on SELECT_COURSE', () => {
    const state = courseReducer(fetchedState(), {
      type: SELECT_COURSE,
      index: 2,
    });

    expect(state.toJS()).toEqual({
      ...fetched,
      2: { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
    });
  });

  it('marks the right course as unselected on UNSELECT_COURSE', () => {
    const selected = courseReducer(fetchedState(), {
      type: SELECT_COURSE,
      index: 2,
    });
    const state = courseReducer(selected, {
      type: UNSELECT_COURSE,
      index: 2,
    });

    expect(state.toJS()).toEqual(fetched);
  });

  it('returns a new Map instead of mutating the state', () => {
    const state = fetchedState();
    const next = courseReducer(state, { type: SELECT_COURSE, index: 2 });

    expect(next).not.toBe(state);
    expect(state.getIn(['2', 'isSelected'])).toBe(false);
  });
});
