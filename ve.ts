interface Coordinates {
  lat: string;
  lng: string;
}

const coordinates: Coordinates = {
  lat: "-37.3159",
  lng: "145.5763" // Assuming a longitude value for completeness.
};

// Function to validate the coordinate format (latitude and longitude)
function isValidCoordinate(coord: string): boolean {
  const coordinateRegex = /^-?[0-9]{1,3}\.[0-9]{4}$/;
  return coordinateRegex.test(coord);
}

// Example usage:
if (isValidCoordinate(coordinates.lat) && isValidCoordinate(coordinates.lng)) {
  console.log('The coordinates are valid.');
} else {
  console.log('The coordinates are invalid.');
}
