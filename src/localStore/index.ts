/* eslint-disable import/no-cycle */
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import basicNoteFieldReducer from './basicNoteField';
import radioSelectionButtonsReducer from './radioSelectionButtons';

const reducer = combineReducers({
  radioSelectionButtons: radioSelectionButtonsReducer,
  basicNoteField: basicNoteFieldReducer,
});

const devMode = process.env.NODE_ENV === 'development';

export const store = configureStore({
  reducer,
  devTools: devMode,
});

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
