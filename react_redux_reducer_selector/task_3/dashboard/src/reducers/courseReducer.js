import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';

export const initialState = [];

// The list is turned into a Map keyed by id so an update touches one entry
// instead of scanning the whole array.
function setSelected(state, index, isSelected) {
  const courses = new Map(state.map((course) => [course.id, course]));
  const course = courses.get(index);

  if (!course) {
    return state;
  }

  courses.set(index, { ...course, isSelected });

  return [...courses.values()];
}

export default function courseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => ({ ...course, isSelected: false }));
    case SELECT_COURSE:
      return setSelected(state, action.index, true);
    case UNSELECT_COURSE:
      return setSelected(state, action.index, false);
    default:
      return state;
  }
}
