import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScreenState {
  screen: boolean;
}

const initialState: ScreenState = {
  screen: window.innerWidth > 768,
};

const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    setScreen(state, action: PayloadAction<boolean>) {
      state.screen = action.payload;
    },
  },
});

export const { setScreen } = screenSlice.actions;
export default screenSlice.reducer;
