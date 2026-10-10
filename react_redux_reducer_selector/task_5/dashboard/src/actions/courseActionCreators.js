import { bindActionCreators, createStore } from 'redux';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// A store is needed to bind the creators to a dispatch. The reducers arrive in
// the next project, so this one only has to be dispatchable.
const store = createStore((state = {}) => state);


export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}

export const boundCourseActionCreators = bindActionCreators(
  { selectCourse, unSelectCourse },
  store.dispatch
);

export const boundSelectCourse = boundCourseActionCreators.selectCourse;
export const boundUnSelectCourse = boundCourseActionCreators.unSelectCourse;
