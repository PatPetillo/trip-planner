// const mapboxgl = require("mapbox-gl");

// const createMarker = (type, long, lat) => {
//     let newMarker = document.createElement('div');
//     if (type === 'hotel') {
//         newMarker.classList.add('hotel-marker');
//     } else if (type === 'activity') {
//         newMarker.classList.add('activity-marker');
//     } else if (type === 'restaurant') {
//         newMarker.classList.add('restaurant-marker');
//     }
//     return new mapboxgl.Marker(newMarker).setLngLat([long, lat]);
// }

// module.exports = createMarker;


const { Marker } = require('mapbox-gl');

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
	// If user submits unsupported type
	if(!iconURLs.hasOwnProperty(type)) {
		type = 'activities'
	}

	const markerEl = document.createElement('div');
	markerEl.style.width = '32px';
	markerEl.style.height = '37px';
	markerEl.style.backgroundImage = `url(${iconURLs[type]})`; // Look up icon based on activity
	return new Marker(markerEl).setLngLat(coords)

}

module.exports = buildMarker;
