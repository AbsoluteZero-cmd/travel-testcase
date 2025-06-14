import { configureStore } from '@reduxjs/toolkit';

import bookTourReducer from './features/bookTour/bookTourSlice';
import bookTourModalReducer from './features/bookTour/bookTourModalSlice';

export const store = configureStore({
  reducer: {
    bookTour: bookTourReducer,
    bookTourModal: bookTourModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
