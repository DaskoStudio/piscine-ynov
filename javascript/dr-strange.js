function addWeek(date) {
  const weekDays = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"
  ];

  const epoch = new Date(Date.UTC(1, 0, 1));
  epoch.setUTCFullYear(1);

  const target = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  target.setUTCFullYear(date.getUTCFullYear());

  const msPerDay = 24 * 60 * 60 * 1000;
  const diffTime = target.getTime() - epoch.getTime();
  const diffDays = Math.round(diffTime / msPerDay);

  const index = ((diffDays % 14) + 14) % 14;

  return weekDays[index];
}

function timeTravel(options) {
  const { date, hour, minute, second } = options;
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(second);
  return date;
}