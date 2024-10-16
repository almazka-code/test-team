import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface UserItem {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserItem[];
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface UsersSliceState {
  items: UserItem[];
  status: Status;
}

const initialState: UsersSliceState = {
  items: [],
  status: Status.LOADING,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const { data } = await axios.get<ApiResponse>('https://reqres.in/api/users');
  return data.data;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<UserItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserItem[]>) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const usersSelector = (state: RootState) => state.users;
export default usersSlice.reducer;
