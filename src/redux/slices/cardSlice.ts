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
  likes: { [key: number]: boolean };
}

const initialState: CardState = {
  info: {
    firstName: '',
    lastName: '',
    avatar: '',
    email: '',
  },
  count: 8,
  likes: {},
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
    setLike(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.likes[id] = !state.likes[id];
    },
  },
});

export const { setInfo, setCount, setLike } = cardSlice.actions;
export default cardSlice.reducer;
