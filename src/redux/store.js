import { configureStore } from 'redux-starter-kit';
import rootReducer from './reducers';
import geoJson from '../data/boat_ramps';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: geoJson,
});

export default store;
