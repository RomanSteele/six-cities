import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

function Footer(): JSX.Element {

  return(
    <footer className="footer container">
        <Link className="footer-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"data-testid={'footer'}/>
        </Link>
      </footer>
  )
}

export default Footer;
