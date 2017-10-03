const mapboxgl = require("mapbox-gl");
const createMarker = require("./marker.js");

mapboxgl.accessToken = 'pk.eyJ1IjoibXJkd3Q5IiwiYSI6ImNqOGJydTRxaTAxN3gzMG8wdTRpbXJrMjgifQ.Nx2vEKmgionvG277J09aJg';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});

const fullstackMarker = createMarker('activity', -74.009, 40.705);
fullstackMarker.addTo(map);