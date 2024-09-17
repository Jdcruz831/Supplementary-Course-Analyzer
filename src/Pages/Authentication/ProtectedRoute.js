import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './Auth';

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route {...rest} render={(props) => {
      if (!user) {
        return <Navigate to='/LoginMainPage' />;
      }

      if (roles && !roles.includes(user.role)) {
        return <Navigate to='/HomeMainPage' />;
      }

      return <Component {...props} />;
    }} />
  );
};

export default ProtectedRoute;