import React from 'react';

function getComponentName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const WithLogging = (WrappedComponent) => {
  const name = getComponentName(WrappedComponent);

  class WithLoggingComponent extends React.Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingComponent.displayName = `WithLogging(${name})`;

  return WithLoggingComponent;
};

export default WithLogging;
