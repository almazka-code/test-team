import { createSlice } from '@reduxjs/toolkit';

interface PasswordVisibilityState {
  showPassword: boolean;
  showConfirmPassword: boolean;
}

const initialState: PasswordVisibilityState = {
  showPassword: false,
  showConfirmPassword: false,
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
  },
});

export const { toggleShowPassword, toggleShowConfirmPassword } = passwordVisibilitySlice.actions;
export default passwordVisibilitySlice.reducer;
