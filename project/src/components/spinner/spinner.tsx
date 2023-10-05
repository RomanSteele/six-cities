import { CSSProperties } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import Header from '../header/header';

type SpinnerProps = {
  loading: boolean
}

function Spinner ({ loading }: SpinnerProps): JSX.Element {


  const override: CSSProperties = {

    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
    marginTop: '150px',
  };

  return (
    <div className="page page--gray page--main">

      <Header/>

      <main className="page__main page__main--index">
        <div className="cities">
          <div className="cities__places-container container">


            <BeatLoader
              color={'#4481c3'}
              loading={loading}
              cssOverride={override}
              aria-label="Loading Spinner"
              data-testid="loader"
            />


          </div>
        </div>

      </main>
    </div>
  );
}


export default Spinner;
