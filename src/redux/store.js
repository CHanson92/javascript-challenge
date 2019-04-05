import { configureStore } from 'redux-starter-kit';
import areaReducer from './modules/areaReducer';
import geoJson from '../data/boat_ramps';

const store = configureStore({
  reducer: areaReducer,
  preloadedState: geoJson,
});

export default store;
