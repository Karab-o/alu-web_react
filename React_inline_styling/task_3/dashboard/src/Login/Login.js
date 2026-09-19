import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.field)}>
        <label htmlFor="email" className={css(styles.label)}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={css(styles.input)}
        />
      </div>
      <div className={css(styles.field)}>
        <label htmlFor="password" className={css(styles.label)}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className={css(styles.input)}
        />
      </div>
      <button className={css(styles.button)}>OK</button>
    </>
  );
}

const screenSmall = '@media (max-width: 900px)';

const styles = StyleSheet.create({
  field: {
    display: 'inline-block',
    [screenSmall]: {
      display: 'block',
      marginBottom: '10px',
    },
  },
  label: {
    marginRight: '5px',
  },
  input: {
    marginRight: '15px',
  },
  button: {
    padding: '2px 10px',
    [screenSmall]: {
      display: 'block',
    },
  },
});

export default Login;
