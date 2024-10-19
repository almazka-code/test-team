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
    setShowPassword(state) {
      state.showPassword = !state.showPassword;
    },
    setShowConfirmPassword(state) {
      state.showConfirmPassword = !state.showConfirmPassword;
    },
    setShowLoginPassword(state) {
      state.showLoginPassword = !state.showLoginPassword;
    },
  },
});

export const { setShowPassword, setShowConfirmPassword, setShowLoginPassword } =
  passwordVisibilitySlice.actions;
export default passwordVisibilitySlice.reducer;
