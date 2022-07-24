import React from 'react';
import { useSelector } from 'react-redux';

import { Navigate, Outlet, RouteProps } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

interface IPublicRouteProps extends RouteProps {
  closed: Boolean;
  redirectTo: string;
}

const PublicRoute = ({ closed = false, redirectTo }: IPublicRouteProps) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && closed;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default PublicRoute;
