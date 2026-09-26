import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const Cell = isHeader ? 'th' : 'td';
  const spansBothColumns = isHeader && textSecondCell === null;
  const cellStyle = css(
    styles.cell,
    isHeader && styles.headerCell,
    spansBothColumns && styles.headerCellFull
  );

  return (
    <tr className={css(isHeader ? styles.headerRow : styles.row)}>
      {spansBothColumns ? (
        <th colSpan="2" className={cellStyle}>
          {textFirstCell}
        </th>
      ) : (
        <>
          <Cell className={cellStyle}>{textFirstCell}</Cell>
          <Cell className={cellStyle}>{textSecondCell}</Cell>
        </>
      )}
    </tr>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  cell: {
    border: '1px solid #dedede',
    padding: '6px 10px',
    textAlign: 'left',
  },
  headerCell: {
    fontWeight: 'bold',
  },
  headerCellFull: {
    textAlign: 'center',
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
