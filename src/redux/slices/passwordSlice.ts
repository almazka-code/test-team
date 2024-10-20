import { createSlice } from '@reduxjs/toolkit';

interface PasswordState {
  showPassword: boolean;
  showConfirmPassword: boolean;
  showLoginPassword: boolean;
}

const initialState: PasswordState = {
  showPassword: false,
  showConfirmPassword: false,
  showLoginPassword: false,
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setShowPassword(state) {
      state.showPassword = !state.showPassword;
    },
    setShowConfirmPassword(state) {
      state.showConfirmPassword = !state.showConfirmPassword;
    },
    setShowLoginPassword(state) {
      state.showLoginPassword = !state.showLoginPassword;
    },
    resetPasswordVisibility(state) {
      state.showPassword = false;
      state.showConfirmPassword = false;
      state.showLoginPassword = false;
    },
  },
});

export const {
  setShowPassword,
  setShowConfirmPassword,
  setShowLoginPassword,
  resetPasswordVisibility,
} = passwordSlice.actions;
export default passwordSlice.reducer;
