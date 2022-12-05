
import { AppRoute } from '../../const';
import FavoritesScreen from '../../pages/favorites-screen';
import LoginScreen from '../../pages/login-screen';
import { Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen';
import PropertyScreen from '../../pages/property-screen';
import NotFoundScreen from '../../pages/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {

  const { isDataLoaded } = useAppSelector(({ DATA }) => DATA);
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);

  if (!isDataLoaded) {

    return (
      <LoadingScreen />
    );

  }
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainScreen />}
      />
      <Route
        path={AppRoute.PropertyRoute}
        element={<PropertyScreen />}
      />
      <Route
        path={AppRoute.Login}
        element={
          <PrivateRoute
            authorizationStatus={authorizationStatus}
          >
            <LoginScreen />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <FavoritesScreen/>
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={<NotFoundScreen />}
      />
    </Routes>
  );
}

export default App;

/*<Routes>
      <Route
        path={AppRoute.Main}
        element={<MainScreen />}
      />
      <Route
        path={AppRoute.Login}
        element={
          <LoginScreen />
        }
      />
      <Route
        path={AppRoute.Property}
        element={<RoomScreen />}
      />
      <Route
        path={AppRoute.Favorites}
        element={<FavoritesScreen/>}
      />
    </Routes>
    */
