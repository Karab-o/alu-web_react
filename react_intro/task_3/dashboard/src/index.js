import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';

ReactDOM.render(
  <Notifications />,
  document.getElementById('root-notifications')
);

ReactDOM.render(<App />, document.getElementById('root'));
