import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={closeIcon} alt="close icon" width="15px" />
            </button>
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.list)}>
                  {listNotifications.map(({ id, type, html, value }) => (
                    <NotificationItem
                      key={id}
                      id={id}
                      type={type}
                      html={html}
                      value={value}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

const screenSmall = '@media (max-width: 900px)';

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    padding: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  notifications: {
    position: 'relative',
    border: '3px dashed #e1354b',
    padding: '12px',
    margin: '10px',
    [screenSmall]: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      border: 'none',
      backgroundColor: 'white',
      fontSize: '20px',
      overflowY: 'auto',
      zIndex: 10,
    },
  },
  list: {
    [screenSmall]: {
      padding: 0,
      margin: 0,
    },
  },
  closeButton: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
