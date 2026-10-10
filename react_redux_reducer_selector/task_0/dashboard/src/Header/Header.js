import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import AppContext from '../App/AppContext';

class Header extends React.Component {
  render() {
    const { user, logOut } = this.context;

    return (
      <>
        <div className={css(styles.header)}>
          <img src={logo} className={css(styles.logo)} alt="holberton logo" />
          <h1 className={css(styles.title)}>School dashboard</h1>
        </div>
        {user.isLoggedIn && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            Welcome <strong>{user.email}</strong> (
            <a href="#" onClick={logOut} className={css(styles.link)}>
              logout
            </a>
            )
          </p>
        )}
      </>
    );
  }
}

Header.contextType = AppContext;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e1354b',
    padding: '10px',
  },
  logo: {
    width: '200px',
    height: '200px',
  },
  title: {
    color: '#e1354b',
    fontSize: '2em',
    marginLeft: '20px',
  },
  logoutSection: {
    padding: '0 20px',
  },
  link: {
    color: '#e1354b',
    cursor: 'pointer',
  },
});

export default Header;
