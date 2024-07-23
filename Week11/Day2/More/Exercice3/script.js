const timeUntilNextHoliday = require('./date');

const result = timeUntilNextHoliday();
console.log(`Today's date is ${result.today}`);
console.log(`The next holiday is ${result.holiday}`);
console.log(`The next holiday is in ${result.days} days, ${result.hours} hours, ${result.minutes} minutes, and ${result.seconds} seconds.`);
