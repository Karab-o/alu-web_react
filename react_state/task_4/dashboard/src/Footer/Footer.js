import React from 'react';
import AppContext from '../App/AppContext';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <AppContext.Consumer>
      {({ user }) => (
        <>
          <p>
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </p>
          {user.isLoggedIn && (
            <p>
              <a href="#">Contact us</a>
            </p>
          )}
        </>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;
