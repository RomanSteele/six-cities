import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginScreen from '../../pages/login-screen';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: string;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;

  if (children.type !== LoginScreen){

    return (
      authorizationStatus === AuthorizationStatus.Authorized
        ? children
        : <Navigate to={AppRoute.Login} />
    );
  }

  return (
    authorizationStatus === AuthorizationStatus.Authorized
      ? <Navigate to={AppRoute.Main} />
      : children
  );
}

export default PrivateRoute;
