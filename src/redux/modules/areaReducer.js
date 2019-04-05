/* eslint-disable no-underscore-dangle */
export const AREA_50 = 'AREA_50';
export const AREA_200 = 'AREA_200';
export const AREA_526 = 'AREA_526';

export const area50 = number => ({ type: AREA_50, number });

export const area200 = number => ({ type: AREA_200, number });

export const area526 = number => ({ type: AREA_526, number });

const areaReducer = (state, action) => {
  const areas = state.features;
  const areasArray = areas.map(result => (result.properties.area_));
  switch (action.type) {
    default:
      return state;
    case AREA_50:
      return areasArray.filter(area => area < 50).length;
    case AREA_200:
      return areasArray.filter(area => area > 50 && area < 200).length;
    case AREA_526:
      return areasArray.filter(area => area > 200).length;
  }
};

export default areaReducer;
