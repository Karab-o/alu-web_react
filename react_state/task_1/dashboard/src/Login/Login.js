import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({
      email,
      enableSubmit: email !== '' && this.state.password !== '',
    });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({
      password,
      enableSubmit: this.state.email !== '' && password !== '',
    });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.field)}>
            <label htmlFor="email" className={css(styles.label)}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={css(styles.input)}
              value={email}
              onChange={this.handleChangeEmail}
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
              value={password}
              onChange={this.handleChangePassword}
            />
          </div>
          <input
            type="submit"
            value="OK"
            className={css(styles.button)}
            disabled={!enableSubmit}
          />
        </form>
      </>
    );
  }
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
