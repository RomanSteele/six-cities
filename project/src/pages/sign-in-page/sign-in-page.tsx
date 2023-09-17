import { FormEvent, useRef, useState } from "react";
import { validateEmail, validatePassword } from "../../helpers";
import Logo from "../../components/logo/logo";
import { store } from "../../store";
import { loginAction } from "../../store/api-actions";
import { UserLogin } from "../../types/user-login-data";

function SignInPage ():JSX.Element {

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsEPasswordValid] = useState<boolean>(true);

  const sendOnSubmit = (userData: UserLogin) => {
    store.dispatch(loginAction(userData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();


    if (emailRef.current && passwordRef.current) {

      const emailValue = emailRef.current.value;
      const passwordValue = passwordRef.current.value;

      const validatedEmail = validateEmail(emailValue);
      const validatedPassword = validatePassword(passwordValue);

      if (validatedEmail && validatedPassword) {

        setIsEmailValid(true);
        setIsEPasswordValid(true);

        sendOnSubmit({
          email: emailValue,
          password: passwordValue,
        });

      }
      else{

        validatedEmail ? setIsEmailValid(true) : setIsEmailValid(false)
        validatedPassword ? setIsEPasswordValid(true) : setIsEPasswordValid(false)

      }
    }

  };



  return(
  <div className="page page--gray page--login">

<header className="header">
        <div className="container">
          <div className="header__wrapper">
          <Logo/>
          </div>
        </div>
      </header>

  <main className="page__main page__main--login">
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>

          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input ref={emailRef} className="login__input form__input" type="email" name="email" placeholder="Email" data-testid="user-email" />
          </div>

          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" data-testid="user-password"/>
          </div>

          <button className="login__submit form__submit button" type="submit" data-testid={'test-button'}>Sign in</button>
          { !isEmailValid || !isPasswordValid ? <p className="favorites__status-description">Wrong email or password!</p> : ''}
        </form>
      </section>

      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </section>

    </div>
  </main>
</div>
  )
}

export default SignInPage
