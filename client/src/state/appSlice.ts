import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AppState = {
  currentPlanet: string;
  showContent: boolean;
  isTransitioning: boolean;
  scene: string;
};

const initialState: AppState = {
  currentPlanet: 'Overview',
  showContent: false,
  isTransitioning: false,
  scene: 'light-speed',
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
    setScene: (state, action: PayloadAction<string>) => {
      state.scene = action.payload;
    },
  },
});

export const { setCurrentPlanet, endTransition, setScene } = appSlice.actions;

export default appSlice.reducer;
