import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials: { name: string; email: string; password: string }) => {
    try {
      // resoponse.data
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('😲 Sorry, registration error! Please try again!');
    }
  }
);

const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Login error! 😲 Something wrong! Please try again!');
    }
  }
);

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error: any) {
    console.log(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (arg, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(null);
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error: any) {
      console.log(error.message);
    }
  }
);

const authOperations = {
  register,
  login,
  logout,
  fetchCurrentUser,
};

export default authOperations;
