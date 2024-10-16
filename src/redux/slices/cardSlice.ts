import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardState {
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
}

const initialState: CardState = {
  firstName: '',
  lastName: '',
  avatar: '',
  email: '',
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<CardState>) => {
      // state.firstName = action.payload.firstName;
      // state.lastName = action.payload.lastName;
      // state.avatar = action.payload.avatar;
      // state.email = action.payload.email;
      return { ...action.payload };
    },
  },
});

export const { setCard } = cardSlice.actions;
export default cardSlice.reducer;
