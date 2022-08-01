import { IGlobalState } from 'models/models';

const getIsLoggedIn = (state: any) => state.auth.isLoggedIn;

const getUsername = (state: IGlobalState) => state.auth.user.name;

const getIsFetchingCurrentUser = (state: IGlobalState) =>
  state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrentUser,
};

export default authSelectors;
