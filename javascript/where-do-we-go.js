import { places } from './where-do-we-go.data.js';

export function explore() {
  // Sort the places from North (positive) to South (negative)
  places.sort((a, b) => {
    const parse = (c) => {
      // Robust match for DMS coordinates regardless of inner spaces
      const match = c.match(/(\d+)[°\s]+(\d+)['\s]+([\d.]+)["\s]+([NS])/);
      if (match) {
        const sign = match[4] === 'N' ? 1 : -1;
        return sign * (Number(match[1]) + Number(match[2]) / 60 + Number(match[3]) / 3600);
      }
      return 0;
    };
    return parse(b.coordinates) - parse(a.coordinates);
  });

  // Location indicator
  const location = document.createElement('a');
  location.className = 'location';
  location.target = '_blank';
  document.body.appendChild(location);

  // Compass direction
  const direction = document.createElement('div');
  direction.className = 'direction';
  document.body.appendChild(direction);

  // Render sections
  places.forEach((place) => {
    const section = document.createElement('section');
    // Extract place name (before comma) and slugify it (e.g., "Arlit, Niger" -> "arlit")
    const placeName = place.name.split(',')[0].trim();
    const nameFormatted = placeName.toLowerCase().replace(/\s+/g, '-');
    section.style.background = `url('./where-do-we-go_images/${nameFormatted}.jpg')`;
    section.style.backgroundSize = 'cover';
    section.style.backgroundPosition = 'center';
    document.body.appendChild(section);
  });

  let lastScrollY = window.scrollY;

  const updateLocation = () => {
    const index = Math.round(window.scrollY / window.innerHeight);
    const safeIndex = Math.max(0, Math.min(places.length - 1, index));
    const place = places[safeIndex];
    if (place) {
      location.textContent = `${place.name}\n${place.coordinates}`;
      location.style.color = place.color;
      location.href = `https://www.google.com/maps/place/${encodeURIComponent(place.coordinates)}`;
    }
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      direction.textContent = 'S';
    } else if (window.scrollY < lastScrollY) {
      direction.textContent = 'N';
    }
    lastScrollY = window.scrollY;
    updateLocation();
  });

  direction.textContent = 'N';
  updateLocation();
}