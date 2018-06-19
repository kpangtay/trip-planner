const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoibnZtYnJ3IiwiYSI6ImNqaW0zeDA4bjAwM3MzcXV4cG9lczZ0bnEifQ.leDFeX1kwIRdhDT1wVTvRw';

console.log('hi, this is src/index.js');

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});
