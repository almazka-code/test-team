import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Info = {
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
};

interface CardState {
  info: Info;
  count: number;
}

const initialState: CardState = {
  info: {
    firstName: '',
    lastName: '',
    avatar: '',
    email: '',
  },
  count: 8,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<Info>) => {
      state.info = { ...state.info, ...action.payload };
    },
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
  },
});

export const { setInfo, setCount } = cardSlice.actions;
export default cardSlice.reducer;
