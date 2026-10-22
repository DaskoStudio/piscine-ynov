function isValid(date) {
  return (date instanceof Date || typeof date === 'number') && !isNaN(date);
}

function isAfter(date1, date2) {
  return date1 > date2;
}

function isBefore(date1, date2) {
  return date1 < date2;
}

function isFuture(date) {
  return isValid(date) && isAfter(date, new Date());
}

function isPast(date) {
  return isValid(date) && isBefore(date, new Date());
}