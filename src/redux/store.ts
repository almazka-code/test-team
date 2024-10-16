import { configureStore } from '@reduxjs/toolkit';
import users from './slices/usersSlice';
import card from './slices/cardSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    users,
    card,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
