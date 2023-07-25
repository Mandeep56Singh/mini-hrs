import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../resources/auth.resource';

const ProtectedRoute: React.FC<{ children: any }> = ({ children }) => {
  const isActive = isLoggedIn();
  if (!isActive) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
