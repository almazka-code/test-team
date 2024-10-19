import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import users from './slices/usersSlice';
import card from './slices/cardSlice';
import passwordVisibility from './slices/passwordVisibility';
import login from './slices/loginSlice';
import register from './slices/registerSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  users,
  card,
  passwordVisibility,
  login,
  register,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['card'],
};

const persistedCardReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedCardReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
