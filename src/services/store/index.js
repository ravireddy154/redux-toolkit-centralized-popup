import { configureStore } from '@reduxjs/toolkit';
import popupReducer from '../reducerslice';

export default configureStore({
  reducer: {
    loginPopup: popupReducer,
  },
});
