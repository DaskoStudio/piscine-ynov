function citiesOnly(arr) {
  return arr.map(obj => obj.city);
}

function upperCasingStates(arr) {
  return arr.map(state =>
    state
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  );
}

function fahrenheitToCelsius(arr) {
  return arr.map(temp => {
    const fahrenheit = parseFloat(temp.replace(/\s/g, ''));
    const celsius = Math.floor((fahrenheit - 32) * (5 / 9));
    return `${celsius}°C`;
  });
}

function trimTemp(arr) {
  return arr.map(obj => ({
    ...obj,
    temperature: obj.temperature.replace(/\s/g, '')
  }));
}

function tempForecasts(arr) {
  return arr.map(obj => {
    const tempF = parseFloat(obj.temperature.replace(/\s/g, ''));
    const tempC = Math.floor((tempF - 32) * (5 / 9));
    const state = obj.state
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    return `${tempC}°Celsius in ${obj.city}, ${state}`;
  });
}