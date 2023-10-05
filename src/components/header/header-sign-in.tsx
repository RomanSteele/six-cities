import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../logo/logo';


function HeaderSignIn (): JSX.Element {


  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo/>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile" >
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login" >Sign in</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );

}

export default HeaderSignIn;
