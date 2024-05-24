/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'localStore';

export interface BasicNoteFieldState {
  text: string;
}

const initialState: BasicNoteFieldState = {
  text: '',
};

function basicNoteFieldSliceReducer(
  state: BasicNoteFieldState,
  action: PayloadAction<string>,
) {
  state.text = action.payload;
}

const basicNoteFieldSlice = createSlice({
  name: 'basicNoteField',
  initialState,
  reducers: {
    basicNoteFieldAction: basicNoteFieldSliceReducer,
  },
});

export const { basicNoteFieldAction } = basicNoteFieldSlice.actions;

export const basicNoteFieldSelector = (state: RootState) =>
  state.basicNoteField.text;

export default basicNoteFieldSlice.reducer;
