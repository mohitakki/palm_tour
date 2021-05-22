import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const SecureRoutes = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
 /*
  const isLoggedIn = () => localStorage.getItem('jwttoken') != null;
  return (
    <Route
      {...rest}
      render={({ location }) => (
        isLoggedIn() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: location },
          }}
          />
        )
      )}
    />
  ); */
  return null;
};

SecureRoutes.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default SecureRoutes;
