import { useSelector } from 'react-redux';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

interface IPrivateRouteProps extends RouteProps {
  redirectTo: string;
}

export default function PrivateRoute({ redirectTo }: IPrivateRouteProps) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
}
