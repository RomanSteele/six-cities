import Header from "../../components/header/header";

function NotFoundPage (): JSX.Element {

    const notFoundStyles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: '0 auto',
    };

    const notFoundTitleStyles = {
      fontSize: '2rem',

    };

  return(
    <div className="page page--gray page--main">

    <Header/>

    <main className="page__main page__main--index">
    <div className="cities">

      <div style={notFoundStyles}>
              <h1 style={notFoundTitleStyles}>NOT FOUND!</h1>
            </div>

    </div>

  </main>
  </div>
  )
}

export default NotFoundPage;
