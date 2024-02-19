import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: getDefault => getDefault().concat(apiSlice.middleware),
});
setupListeners(store.dispatch);

export default store;
