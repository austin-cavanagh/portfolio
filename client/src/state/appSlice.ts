import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AppState = {
  scene: string;
  currentPlanet: string;
  showContent: boolean;
  isTransitioning: boolean;
  isLoading: boolean;
};

const initialState: AppState = {
  scene: 'solar-system',
  currentPlanet: 'Overview',
  showContent: false,
  isTransitioning: false,
  isLoading: true,
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
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCurrentPlanet, endTransition, setScene, setIsLoading } =
  appSlice.actions;

export default appSlice.reducer;
