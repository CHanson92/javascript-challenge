# Technical challenge by Chris Hanson

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Before you start developing make sure you install all the dependencies:

```
> npm install
```

then simply run the project

```
> npm start
```

## Changelog

* 27/03/2018 - Added Google Maps API.
* 28/03/2018 - Created Components to get the GeoJSON as props.
* 29/03/2018 - Got a single marker on the map, with data fed through as props.
* 31/03/2018 - Changed from Google Maps API to React Leaflet and moved ComponentDidMount from App to MapContainer.
* 01/03/2018 - Removed ComponentDidMount and directly imported the GeoJSON.
* 02/03/2018 - Got the GeoJSON to show on the Map.
* 02/03/2018 - Added a OnEachFeature Popup that shows the Material and Area.
* 04/03/2018 - Added Redux, Redux Starter Kit & React-Redux and imported geoJSON as preloaded state.
* 05/03/2018 - Created new components for analysis of boat ramps per material & area.