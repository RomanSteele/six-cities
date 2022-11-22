//import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
//import FavoritesScreen from '../../pages/favorites-screen';
//import LoginScreen from '../../pages/login-screen';
import { Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen';
import PropertyScreen from '../../pages/property-screen';
import NotFoundScreen from '../../pages/not-found-screen';

function App(): JSX.Element {
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
