const mapboxgl = require("mapbox-gl");

const createMarker = (type, long, lat) => {
    let newMarker = document.createElement('div');
    if (type === 'hotel') {
        newMarker.classList.add('hotel-marker');
    } else if (type === 'activity') {
        newMarker.classList.add('activity-marker');
    } else if (type === 'restaurant') {
        newMarker.classList.add('restaurant-marker');
    }
    return new mapboxgl.Marker(newMarker).setLngLat([long, lat]);
}

module.exports = createMarker;