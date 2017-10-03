const mapboxgl = require("mapbox-gl");
const { Map } = mapboxgl;
const buildMarker = require('./marker.js');

mapboxgl.accessToken = 'pk.eyJ1IjoibXJkd3Q5IiwiYSI6ImNqOGJydTRxaTAxN3gzMG8wdTRpbXJrMjgifQ.Nx2vEKmgionvG277J09aJg';

const map = new Map({
	container: 'map',
	center : [-74.009, 40.705], // FullStack coordinates
	zoom: 15,
	style: "mapbox://styles/mapbox/streets-v10"
})

const marker = buildMarker('hotels', [-74.009, 40.705])
marker.addTo(map)