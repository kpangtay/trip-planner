const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
'pk.eyJ1Ijoia2RwYW5nIiwiYSI6ImNqaW0zd3J6czAwM2kzcW8yOHV1dm9jMDEifQ.ZBt75tOuFPmvy4Jlo2V4sQ';

console.log('hi, this is src/index.js');

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});


const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
