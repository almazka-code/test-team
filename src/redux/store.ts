import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import users from './slices/usersSlice';
import card from './slices/cardSlice';
import passwordVisibility from './slices/passwordVisibility';

export const store = configureStore({
  reducer: {
    users,
    card,
    passwordVisibility,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
