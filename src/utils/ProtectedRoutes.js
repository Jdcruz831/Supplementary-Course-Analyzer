import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoutes = ({ children }) => {
  const { currentUser } = useAuth(); 

  if (!currentUser) {
    return <Navigate to="/Login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
