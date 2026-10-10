import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);

  if (isHeader) {
    const spansBothColumns = textSecondCell === null;
    const cellStyle = css(
      styles.cell,
      styles.headerCell,
      spansBothColumns && styles.headerCellFull
    );

    return (
      <tr className={css(styles.headerRow)}>
        {spansBothColumns ? (
          <th colSpan="2" className={cellStyle}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={cellStyle}>{textFirstCell}</th>
            <th className={cellStyle}>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  }

  return (
    <tr className={css(styles.row, isChecked && styles.rowChecked)}>
      <td className={css(styles.cell)}>
        <input
          type="checkbox"
          className={css(styles.checkbox)}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        {textFirstCell}
      </td>
      <td className={css(styles.cell)}>{textSecondCell}</td>
    </tr>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
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
  checkbox: {
    marginRight: '8px',
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
