import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AppState = {
  currentPlanet: string;
  showContent: boolean;
  isTransitioning: boolean;
};

const initialState: AppState = {
  currentPlanet: 'Sun',
  showContent: false,
  isTransitioning: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentPlanet: (state, action: PayloadAction<string>) => {
      state.currentPlanet = action.payload;
      state.isTransitioning = true;
    },
    endTransition: state => {
      state.isTransitioning = false;
    },
  },
});

export const { setCurrentPlanet, endTransition } = appSlice.actions;

export default appSlice.reducer;
