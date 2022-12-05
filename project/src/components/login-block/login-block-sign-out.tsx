
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function LoginBlockSignOut(): JSX.Element {

  const { userLoginData } = useAppSelector(({ USER })=> USER);

  const dispatch = useAppDispatch();


  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper" >
            <img src={userLoginData.avatarUrl} alt={''}></img>
          </div>
          <span className="header__user-name user__name">{userLoginData.email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link"onClick={(evt) => {evt.preventDefault(); dispatch(logoutAction());}} href="/main">
          <span className="header__signout" >Sign out</span>
        </a>
      </li>
    </>

  );
}

export default LoginBlockSignOut;


