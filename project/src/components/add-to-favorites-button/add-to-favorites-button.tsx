import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { addFavoriteProperty } from '../../store/api-actions';
import { Property } from '../../types/property';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';

type AddToMyFavoritesButtonProps = {
  propertyId: number;
}

function AddToMyFavoritesButton({ propertyId }: AddToMyFavoritesButtonProps): JSX.Element {

  const navigate = useNavigate();

  const myFavoritesList = useAppSelector(({ ACTION }) => ACTION.favorites);
  const authorizationStatus = useAppSelector(({ USER }) => USER.authorizationStatus);
  const [propertyFavoriteStatus, setpropertyFavoriteStatys] = useState(0);

  const newPropStatus = 1 - propertyFavoriteStatus;

  const addToMyList = (id: number, status: number) => {
    store.dispatch(addFavoriteProperty({ id, status }));
  };

  useEffect(() => {
    if (!myFavoritesList) {
      return;
    }
    if (myFavoritesList.find((item: Property) => item.id === propertyId)) {
      setpropertyFavoriteStatys(1);
    } else {
      setpropertyFavoriteStatys(0);
    }
  }, [propertyId, myFavoritesList]);


  return (
    authorizationStatus === AuthorizationStatus.Authorized ?
      <button onClick={() =>{ addToMyList(propertyId, newPropStatus);}} className={`place-card__bookmark-button ${authorizationStatus === AuthorizationStatus.Authorized && propertyFavoriteStatus ? 'place-card__bookmark-button--active' : ''} button`} type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
      :
      <button onClick={() =>{navigate(AppRoute.Login);}} className={`place-card__bookmark-button ${authorizationStatus === AuthorizationStatus.Authorized && propertyFavoriteStatus ? 'place-card__bookmark-button--active' : ''} button`} type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
  );
}


export default AddToMyFavoritesButton;
