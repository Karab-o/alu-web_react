import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Notifications from './Notifications/Notifications';

ReactDOM.render(
  <Notifications />,
  document.getElementById('root-notifications')
);

ReactDOM.render(<App />, document.getElementById('root'));
