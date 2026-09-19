import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" className={css(styles.list)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            textFirstCell="No course available yet"
            isHeader={false}
          />
        ) : (
          listCourses.map(({ id, name, credit }) => (
            <CourseListRow
              key={id}
              textFirstCell={name}
              textSecondCell={credit}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    border: '1px solid #dedede',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
