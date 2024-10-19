import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from './usersSlice';
import { UserData } from './loginSlice';

interface RegisterState {
  status: Status;
}

const initialState: RegisterState = {
  status: Status.LOADING,
};

//Регистрация пользователей
export const registerUser = createAsyncThunk('users/registerUser', async (userData: UserData) => {
  const response = await axios.post('https://reqres.in/api/register', {
    email: userData.email,
    password: userData.password,
  });
  return response.data.token;
});

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = Status.SUCCESS;
        localStorage.setItem('token', action.payload);
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export default registerSlice.reducer;
