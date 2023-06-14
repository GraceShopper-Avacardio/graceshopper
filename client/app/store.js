import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import singleProductslice from '../features/singleProduct/singleProductSlice';


const store = configureStore({
  reducer: { auth: authReducer,singleProduct: singleProductslice},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
