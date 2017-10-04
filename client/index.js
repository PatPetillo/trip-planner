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

fetch('../api').then(function (response) {
	return response.json();
}).then(function (attractions) {
	let hotelSelect = document.getElementById('hotels-choices');
	attractions.hotels.forEach(function (hotel) {
		let option = document.createElement('option');
		option.setAttribute("value", hotel.place.location);
		let textNode = document.createTextNode(hotel.name);
		option.appendChild(textNode)
		hotelSelect.append(option);
	});
	let restaurantSelect = document.getElementById('restaurants-choices');
	attractions.restaurants.forEach(function (restaurant) {
		let option = document.createElement('option');
		let textNode = document.createTextNode(restaurant.name);
		option.appendChild(textNode)
		restaurantSelect.append(option);
	});
	let activitySelect = document.getElementById('activities-choices');
	attractions.activities.forEach(function (activity) {
		let option = document.createElement('option');
		let textNode = document.createTextNode(activity.name);
		option.appendChild(textNode)
		activitySelect.append(option);
	});
});

document.getElementById('hotels-add').addEventListener('click', function() {
	let hotels = document.getElementById('hotels-choices');
	let hotelElement = hotels.options[hotels.selectedIndex];
	let hotelLi = document.createElement('li');
	let textNode = document.createTextNode(hotelElement.innerHTML);
	hotelLi.appendChild(textNode);
	let hotelItin = document.getElementById('hotels-list');
	hotelItin.append(hotelLi);
	buildMarker('hotels', hotelElement.value.split(',').map(element => Number(element))).addTo(map);
});