
import { useAppSelector } from "../../hooks";
import HeaderSignIn from "./header-sign-in";
import HeaderSignOut from "./header-sign-out";

function Header (): JSX.Element {

  const { authorizationStatus, userLoginData } = useAppSelector(({USER})=> USER)


  return (
    <ul className="user-block">
      {authorizationStatus === 'AUTH' ? <HeaderSignOut data={userLoginData} /> : <HeaderSignIn />}
    </ul>);
}



export default Header;
