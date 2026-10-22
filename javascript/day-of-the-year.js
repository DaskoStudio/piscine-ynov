function dayOfTheYear(date) {
  const firstDay = new Date(date);
  firstDay.setMonth(0, 1);
  firstDay.setHours(0, 0, 0, 0);
  const currentDay = new Date(date);
  currentDay.setHours(0, 0, 0, 0);
  return Math.round((currentDay - firstDay) / (1000 * 60 * 60 * 24)) + 1;
}