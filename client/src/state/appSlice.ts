import { createSlice } from '@reduxjs/toolkit';

type AppState = {};

const initialState: AppState = {};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;

export default appSlice.reducer;
