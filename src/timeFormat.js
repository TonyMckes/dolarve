export function timeFormat(input, dates) {
  // input = 2021-10-14T17:10:50.323Z
  // Check if input is already formatted, if NOT then proceed
  // date = Thu Oct 14 2021 13:10:50 GMT-0400 (Venezuela Time)
  const date = input instanceof Date ? input : new Date(input);

  const formatter = new Intl.RelativeTimeFormat("es");

  // Ranges of times
  const ranges = {
    years: 3600 * 24 * 365, // 31536000 seconds in a year
    months: 3600 * 24 * 30, // 2592000 seconds in a month
    weeks: 3600 * 24 * 7, // 604800 seconds in a week
    days: 3600 * 24, // 86400 seconds in a day
    hours: 3600, // 3600 seconds in an hour
    minutes: 60,
    seconds: 1,
  };

  // Get time (in milliseconds) from date then subtract the time now
  // and divide by 1000. It should look like: 1632595489773.408
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;

  for (let key in ranges) {
    // Check if the time from the input is less than the secondsElapsed
    if (ranges[key] < Math.abs(secondsElapsed)) {
      // Then divide
      const delta = secondsElapsed / ranges[key];

      // Format from milliseconds to date or time
      return formatter.format(Math.round(delta), key);
    }
  }
  //
  return new Date(dates).toLocaleDateString("es", {
    day: "2-digit",
    month: "long",
  });
}
