function matchCron(cronString, date) {
  const [cronMinute, cronHour, cronDayOfMonth, cronMonth, cronDayOfWeek] = cronString.split(' ');

  const dateMinute = date.getMinutes();
  const dateHour = date.getHours();
  const dateDayOfMonth = date.getDate();
  const dateMonth = date.getMonth() + 1; 
  let dateDayOfWeek = date.getDay(); 

 
  if (dateDayOfWeek === 0) {
    dateDayOfWeek = 7;
  }

  const minuteMatch = cronMinute === '*' || parseInt(cronMinute, 10) === dateMinute;
  const hourMatch = cronHour === '*' || parseInt(cronHour, 10) === dateHour;
  const dayOfMonthMatch = cronDayOfMonth === '*' || parseInt(cronDayOfMonth, 10) === dateDayOfMonth;
  const monthMatch = cronMonth === '*' || parseInt(cronMonth, 10) === dateMonth;
  const dayOfWeekMatch = cronDayOfWeek === '*' || parseInt(cronDayOfWeek, 10) === dateDayOfWeek;

  return minuteMatch && hourMatch && dayOfMonthMatch && monthMatch && dayOfWeekMatch;
}