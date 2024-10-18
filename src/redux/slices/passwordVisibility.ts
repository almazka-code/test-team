import { createSlice } from '@reduxjs/toolkit';

interface PasswordVisibilityState {
  showPassword: boolean;
  showConfirmPassword: boolean;
  showLoginPassword: boolean;
}

const initialState: PasswordVisibilityState = {
  showPassword: false,
  showConfirmPassword: false,
  showLoginPassword: false,
};

const passwordVisibilitySlice = createSlice({
  name: 'passwordVisibility',
  initialState,
  reducers: {
    toggleShowPassword(state) {
      state.showPassword = !state.showPassword;
    },
    toggleShowConfirmPassword(state) {
      state.showConfirmPassword = !state.showConfirmPassword;
    },
    toggleShowLoginPassword(state) {
      state.showLoginPassword = !state.showLoginPassword;
    },
  },
});

export const { toggleShowPassword, toggleShowConfirmPassword, toggleShowLoginPassword } =
  passwordVisibilitySlice.actions;
export default passwordVisibilitySlice.reducer;
