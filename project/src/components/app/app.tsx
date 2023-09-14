import { Routes, Route } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { useAppSelector } from "../../hooks";
import FavoritesPage from "../../pages/favorites-page/favorites-page";
import MainPage from "../../pages/main-page/main-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import RoomPage from "../../pages/room-page/room-page";
import SignInPage from "../../pages/sign-in-page/sign-in-page";
import PrivateRoute from "../private-route/private-route";
import Spinner from "../spinner/spinner";



function App(): JSX.Element {

  const {authorizationStatus} = useAppSelector(({USER})=>USER)
  const {isLoading} = useAppSelector(({ACTION})=>ACTION)

  if (authorizationStatus === AuthorizationStatus.Unknown ) {
    return (
      <Spinner loading={isLoading} />
    );
  }

  return (

      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Room}
          element={<RoomPage  />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus = {authorizationStatus} >
              <FavoritesPage />
            </PrivateRoute>
        }
        />
        <Route
          path={AppRoute.Login}
          element= {
            <PrivateRoute authorizationStatus = {authorizationStatus}>
          <SignInPage />
          </PrivateRoute>
        }
        />
      </Routes>
  )
}

export default App;
