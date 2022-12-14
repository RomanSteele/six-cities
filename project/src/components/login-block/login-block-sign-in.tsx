import { AppRoute } from '../../const';

function LoginBlockSignIn(): JSX.Element {

  return (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href={(`${AppRoute.Login}`)}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </a>
    </li>
  );
}

export default LoginBlockSignIn;
