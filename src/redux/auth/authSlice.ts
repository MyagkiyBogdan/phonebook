import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';
import { IAuthState } from 'models/models';

interface IAuthAction {
  type: string;
  payload?: any;
}

const initialState: IAuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isError: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [authOperations.register.fulfilled as any](state, action: IAuthAction) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isError = false;
    },

    [authOperations.login.fulfilled as any](state, action: IAuthAction) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled as any](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending as any](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled as any](
      state,
      action: IAuthAction
    ) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected as any](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});
