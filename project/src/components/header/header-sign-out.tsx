
import { Link, useNavigate } from "react-router-dom";
import { AppRoute } from "../../const";
import Logo from "../logo/logo";
import { store } from "../../store";
import { logoutAction } from "../../store/api-actions";
import { UserLoginDataResponse } from "../../types/user-login-data";

type HeaderSignOutProps ={
  data: UserLoginDataResponse
}

function HeaderSignOut ({data}:HeaderSignOutProps): JSX.Element {

  const navigate = useNavigate()

  const handleSignOutClick = ()=> {
    store.dispatch(logoutAction());
    navigate(AppRoute.Main)
  }

return(
  <header className="header">
        <div className="container">
          <div className="header__wrapper">
          <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{data.email}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span onClick={()=> handleSignOutClick()}className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
)

}

export default HeaderSignOut;
