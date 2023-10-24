import { configureStore } from "@reduxjs/toolkit";
import shipsDataSlice from './slices/shipsDataSlice'
export const store = configureStore({
  reducer: {
    shipsDataSlice
  },
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
