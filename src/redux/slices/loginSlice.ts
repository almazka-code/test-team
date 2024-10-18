import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from './usersSlice';

interface LoginState {
  status: Status;
}

const initialState: LoginState = {
  status: Status.LOADING,
};

export interface UserData {
  email: string;
  password: string;
}

// Login
export const loginUser = createAsyncThunk('login/loginUser', async (userData: UserData) => {
  const response = await axios.post('https://reqres.in/api/login', userData);
  return response.data.token;
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = Status.SUCCESS;
        localStorage.setItem('token', action.payload);
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export default loginSlice.reducer;
