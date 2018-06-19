const mapbox = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

const buildMarker = (type, coords) => {
  const newMarker = document.createElement('div');
  newMarker.className = 'marker';
  newMarker.style.width = '32px';
  newMarker.style.height = '39px';
  newMarker.style.backgroundImage = `url(${iconURLs[type]})`;
  let reallyNewMarker = new mapbox.Marker(newMarker);
  reallyNewMarker.setLngLat(coords);
  return reallyNewMarker;
};

module.exports = buildMarker;
