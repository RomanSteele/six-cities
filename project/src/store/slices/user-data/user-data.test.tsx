import { AuthorizationStatus } from '../../../const';
import { userData } from './user-data';
import { requireAuthorization, loadUserData } from './user-data';
import { UserData } from '../../../types/state';
import { fakeUserData } from '../../../utils/mocks';
import { initialUserData } from '../../../helpers';


const mockUserData = fakeUserData;

describe('Reducer: userData', () => {

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userLoginData: initialUserData,
};


  it('without additional parameters should return initial state', () => {
    expect(userData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should change authorizationStatus in initialState', () => {
    const state = initialState;
    expect(userData.reducer(state, requireAuthorization(AuthorizationStatus.Unknown)))
    .toEqual({ ...initialState, authorizationStatus: AuthorizationStatus.Unknown });

    expect(userData.reducer(state, requireAuthorization(AuthorizationStatus.Authorized)))
    .toEqual({ ...initialState, authorizationStatus: AuthorizationStatus.Authorized });

    expect(userData.reducer(state, requireAuthorization(AuthorizationStatus.NotAuthorized)))
    .toEqual({ ...initialState, authorizationStatus: AuthorizationStatus.NotAuthorized });
  });


  it('should change userLoginData ', () => {
    const state = initialState;
    expect(userData.reducer(state, loadUserData(mockUserData)))
      .toEqual({ ...initialState, userLoginData: mockUserData });
  })
})
