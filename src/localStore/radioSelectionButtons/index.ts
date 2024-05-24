/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'localStore';

export interface RadioSelectionButtonsState {
  selectedOption: string | null;
}

const initialState: RadioSelectionButtonsState = {
  selectedOption: null,
};

function radioSelectionButtonsReducer(
  state: RadioSelectionButtonsState,
  action: PayloadAction<string>,
) {
  state.selectedOption = action.payload;
}

const radioSelectionButtonsSlice = createSlice({
  name: 'radioSelectionButtons',
  initialState,
  reducers: {
    selectedOptionAction: radioSelectionButtonsReducer,
  },
});

export const { selectedOptionAction } = radioSelectionButtonsSlice.actions;

export const selectedOptionSelector = (state: RootState) =>
  state.radioSelectionButtons.selectedOption;

export default radioSelectionButtonsSlice.reducer;
