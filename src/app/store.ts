import { configureStore } from '@reduxjs/toolkit';
import GlobalStateReducer from '../slices/Global'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    GlobalState: GlobalStateReducer,
  },
  middleware: (getDefaultMiddleware) => 
     getDefaultMiddleware()
    .prepend(
      sagaMiddleware
    )
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
