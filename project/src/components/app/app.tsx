//import { Route, Routes } from 'react-router-dom';
//import { AppRoute } from '../../const';
//import FavoritesScreen from '../../pages/favorites-screen';
//import LoginScreen from '../../pages/login-screen';
import MainScreen from '../../pages/main-screen';
//import RoomScreen from '../../pages/room-screen';

function App(): JSX.Element {
  return (
    <MainScreen />
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
