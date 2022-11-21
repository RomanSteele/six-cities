
import { useAppSelector } from '../../hooks/index';
import LoginBlockSignIn from './login-block-sign-in';
import LoginBlockSignOut from './login-block-sign-out';

function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector(({ USER }) => USER.authorizationStatus);
  return (
    <ul className="header__nav-list">
      {authorizationStatus === true ? <LoginBlockSignOut /> : <LoginBlockSignIn />}
    </ul>);
}

export default UserBlock;
