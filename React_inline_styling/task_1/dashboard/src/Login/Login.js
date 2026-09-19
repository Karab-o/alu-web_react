import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email" className={css(styles.label)}>
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className={css(styles.input)}
      />
      <label htmlFor="password" className={css(styles.label)}>
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className={css(styles.input)}
      />
      <button className={css(styles.button)}>OK</button>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    marginRight: '5px',
  },
  input: {
    marginRight: '15px',
  },
  button: {
    padding: '2px 10px',
  },
});

export default Login;
