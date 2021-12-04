import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import GlobalStateReducer from '../slices/Global'

export const store = configureStore({
  reducer: {
    GlobalState: GlobalStateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
