import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { APIRoute } from '../const';
import { State } from '../types/state';
import { fetchHotelsAction, fetchFavoriteHotelsAction, fetchNearbyHotelsAction, fetchCurrentHotelAction, postReview, checkAuthorization, fetchReviewsAction, changeFavoriteStatus, loginAction, logoutAction } from './api-actions';
import { api } from '.';
import { fakeId, fakeUserData, fakeHotel, fakeHotelsArray, fakeReviews, fakeUserReview, fakeLoginUserData, fakeFavoriteStatusChange } from '../utils/mocks';
import { loadUserData, requireAuthorization } from './slices/user-data/user-data';
import { loadCurrentHotel, loadFavoriteHotels, loadHotels, loadNearbyHotels, loadReviews, setError } from './slices/app-data/app-data';
import { changeLoadingStatus } from './slices/action-data/action-data';


const mockId = fakeId;
const mockLoginData = fakeLoginUserData;
const mockHotel = fakeHotel;
const mockHotelsArray = fakeHotelsArray;
const mockReviewsArray = fakeReviews;
const mockUserData = fakeUserData;
const mockUserReview = fakeUserReview;
const mockFavoriteStatusChange = fakeFavoriteStatusChange;


describe('Async actions', () => {

  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);


  describe('fetchHotelsAction', () => {

    it('should dispatch fetchHotelsAction, changeLoadingStatus and loadHotels when GET /hotels with a 200 status', async () => {
      mockAPI
        .onGet(APIRoute.Hotels)
        .reply(200, mockHotelsArray);

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(fetchHotelsAction());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchHotelsAction.pending.type,
        changeLoadingStatus.type,
        loadHotels.type,
        changeLoadingStatus.type,
        fetchHotelsAction.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });


  });

  describe('fetchFavoriteHotelsAction & changeFavoriteStatus', () => {

    it('should dispatch fetchFavoriteHotelsAction, changeLoadingStatus, loadFavoriteHotels when GET /favorite with a 200 status', async () => {
      mockAPI
        .onGet(APIRoute.Favorite)
        .reply(200, mockHotelsArray);

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(fetchFavoriteHotelsAction());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchFavoriteHotelsAction.pending.type,
        changeLoadingStatus.type,
        loadFavoriteHotels.type,
        changeLoadingStatus.type,
        fetchFavoriteHotelsAction.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });


    it('should dispatch fetchFavoriteHotelsAction, changeLoadingStatus when GET /favorite with a 401 status', async () => {
      mockAPI
        .onGet(APIRoute.Favorite)
        .reply(401, 'errror');

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(fetchFavoriteHotelsAction());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchFavoriteHotelsAction.pending.type,
        changeLoadingStatus.type,
        changeLoadingStatus.type,
        fetchFavoriteHotelsAction.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });


    it('should dispatch changeFavoriteStatus, fetchFavoriteHotelsAction, changeLoadingStatus when GET /favorite/:id/:status with a 200 status', async () => {
      mockAPI
        .onPost(`${APIRoute.Favorite}/${mockFavoriteStatusChange.id}/${mockFavoriteStatusChange.status}`)
        .reply(200);

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(changeFavoriteStatus(mockFavoriteStatusChange));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        changeFavoriteStatus.pending.type,
        fetchFavoriteHotelsAction.pending.type,
        changeLoadingStatus.type,
        changeFavoriteStatus.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });


    it('should dispatch changeLoadingStatus when GET /favorite/:id/:status with a 401 status', async () => {
      mockAPI
        .onPost(`${APIRoute.Favorite}/${mockFavoriteStatusChange.id}/${mockFavoriteStatusChange.status}`)
        .reply(401, 'error');

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(changeFavoriteStatus(mockFavoriteStatusChange));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        changeFavoriteStatus.pending.type,
        changeFavoriteStatus.rejected.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });


  });

  describe('fetchNearbyHotelsAction', () => {

    it('should dispatch fetchNearbyHotelsAction,changeLoadingStatus and loadNearbyHotels when GET /hotels/:id/nearby with a 200 status', async () => {
      mockAPI
        .onGet(`${APIRoute.Hotels}/${fakeId}/nearby`)
        .reply(200, mockHotelsArray);

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(fetchNearbyHotelsAction(mockId));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchNearbyHotelsAction.pending.type,
        changeLoadingStatus.type,
        loadNearbyHotels.type,
        changeLoadingStatus.type,
        fetchNearbyHotelsAction.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });


    it('should dispatch fetchNearbyHotelsAction, changeLoadingStatus when GET /hotels/:id/nearby with a 404 status', async () => {
      mockAPI
        .onGet(`${APIRoute.Hotels}/${mockId}/nearby`)
        .reply(404, []);

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(fetchNearbyHotelsAction(mockId));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchNearbyHotelsAction.pending.type,
        changeLoadingStatus.type,
        changeLoadingStatus.type,
        fetchNearbyHotelsAction.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });

  });

  describe('fetchCurrentHotelAction', () => {

    it('should dispatch fetchCurrentHotelAction, changeLoadingStatus and loadCurrentHotel when GET /hotels/:id with a 200 status', async () => {
      mockAPI
        .onGet(`${APIRoute.Hotels}/${mockHotel.id}`)
        .reply(200, mockHotel);

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(fetchCurrentHotelAction(mockHotel.id));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchCurrentHotelAction.pending.type,
        changeLoadingStatus.type,
        loadCurrentHotel.type,
        changeLoadingStatus.type,
        fetchCurrentHotelAction.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });


    it('should dispatch fetchCurrentHotelAction and changeLoadingStatus when GET /hotels/:id with a 404 status', async () => {
      mockAPI
        .onGet(`${APIRoute.Hotels}/${mockHotel.id}`)
        .reply(404);

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(fetchCurrentHotelAction(mockHotel.id));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchCurrentHotelAction.pending.type,
        changeLoadingStatus.type,
        changeLoadingStatus.type,
        fetchCurrentHotelAction.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });

  });

  describe('fetchReviewsAction', () => {

    it('should dispatch reviews array with loadReviews and fetchReviewsAction, changeLoadingStatus when GET /comments/:id with a 200 status', async () => {
      mockAPI
        .onGet(`${APIRoute.Reviews.replace(':id', mockId.toString())}`)
        .reply(200, mockReviewsArray);

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(fetchReviewsAction(mockId));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        changeLoadingStatus.type,
        loadReviews.type,
        changeLoadingStatus.type,
        fetchReviewsAction.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });


    it('should dispatch fetchReviewsAction and changeLoadingStatus twice when GET /reviews/:id with a 400 status', async () => {
      mockAPI
        .onGet(`${APIRoute.Reviews.replace(':id', mockId.toString())}`)
        .reply(400);

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(fetchReviewsAction(mockId));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        changeLoadingStatus.type,
        changeLoadingStatus.type,
        fetchReviewsAction.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });

  });

  describe('postReview', () => {

    it('should dispatch postReview, changeLoadingStatus, fetchReviewsAction when POST /reviews/:id with a 200 status', async () => {
      mockAPI
        .onPost(`${APIRoute.Reviews.replace(':id', mockUserReview.id.toString())}`)
        .reply(200);

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(postReview(mockUserReview));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        postReview.pending.type,
        changeLoadingStatus.type,
        fetchReviewsAction.pending.type,
        changeLoadingStatus.type,
        changeLoadingStatus.type,
        postReview.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });


    it('should dispatch postReview, changeLoadingStatus twice when POST /reviews/:id with a 401 status', async () => {
      mockAPI
        .onPost(`${APIRoute.Reviews.replace(':id', mockUserReview.id.toString())}`)
        .reply(401);

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(postReview(mockUserReview));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        postReview.pending.type,
        changeLoadingStatus.type,
        changeLoadingStatus.type,
        postReview.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });

  });

  describe('loginActions', () => {

    it('should dispatch loadUserData, fetchFavoriteHotelsAction, requireAuthorization and changeLoadingStatus when POST /login with a 200 status', async () => {
      mockAPI
        .onPost(APIRoute.Login)
        .reply(200, mockUserData);

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(loginAction(mockLoginData));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        loginAction.pending.type,
        changeLoadingStatus.type,
        loadUserData.type,
        requireAuthorization.type,
        changeLoadingStatus.type,
        loginAction.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(1);
      expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', mockUserData.token);
    });


    it('should dispatch loginAction, changeLoadingStatus and requireAuthorization when POST /login with a 400 status', async () => {
      mockAPI
        .onPost(APIRoute.Login)
        .reply(400, []);

      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(loginAction(mockLoginData));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        loginAction.pending.type,
        changeLoadingStatus.type,
        changeLoadingStatus.type,
        requireAuthorization.type,
        loginAction.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
      expect(Storage.prototype.setItem).not.toBeCalledWith('six-cities-token', mockUserData.token);
    });


    it('should dispatch logoutAction and changeLoadingStatus when DELETE /logout with a 400 status', async () => {
      mockAPI
        .onDelete(APIRoute.Logout)
        .reply(400, []);

      const store = mockStore();

      Storage.prototype.setItem = jest.fn();

      await store.dispatch(logoutAction());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        logoutAction.pending.type,
        changeLoadingStatus.type,
        logoutAction.rejected.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });


    it('should dispatch checkAuthorization, changeLoadingStatus, loadUserData, changeLoadingStatus and requireAuthorization when GET /login with a 200 status', async () => {
      mockAPI
        .onGet(APIRoute.Login)
        .reply(200, mockUserData);

      const store = mockStore();

      Storage.prototype.setItem = jest.fn();

      await store.dispatch(checkAuthorization());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        checkAuthorization.pending.type,
        changeLoadingStatus.type,
        loadUserData.type,
        requireAuthorization.type,
        changeLoadingStatus.type,
        checkAuthorization.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });

    it('should dispatch checkAuthorization, changeLoadingStatus and requireAuthorization when GET /login with a 401 status', async () => {
      mockAPI
        .onGet(APIRoute.Login)
        .reply(401, []);

      const store = mockStore();

      Storage.prototype.setItem = jest.fn();

      await store.dispatch(checkAuthorization());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        checkAuthorization.pending.type,
        changeLoadingStatus.type,
        changeLoadingStatus.type,
        requireAuthorization.type,
        checkAuthorization.fulfilled.type,
      ]);
      expect(Storage.prototype.setItem).toBeCalledTimes(0);
    });

  });


  it('should dispatch null to error when used', async () => {
    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    store.dispatch(setError(null));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      setError.type,
    ]);
    expect(Storage.prototype.setItem).toBeCalledTimes(0);
  });
});
