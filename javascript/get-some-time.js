function firstDayWeek(week, year) {
  let time = new Date(0);
  time.setFullYear(year, 0, 1);
  time.setHours(0, 0, 0, 0);

  let day = time.getDay();
  let diff = day === 0 ? 6 : day - 1;

  let monday = new Date(time);
  monday.setDate(time.getDate() - diff + (week - 1) * 7);

  if (monday.getFullYear() < year) {
    monday = time;
  }

  let d = String(monday.getDate()).padStart(2, '0');
  let m = String(monday.getMonth() + 1).padStart(2, '0');
  let y = String(monday.getFullYear()).padStart(4, '0');

  return `${d}-${m}-${y}`;
}