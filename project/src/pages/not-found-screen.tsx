import Header from '../components/header/header';

function NotFoundScreen(): JSX.Element {


  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <br></br>
        <br></br>
        <br></br>
        <h1 className="login__title" style={{ margin: 'auto' }}>404 - Not Found!</h1>
      </main>
    </div>

  );
}

export default NotFoundScreen;
