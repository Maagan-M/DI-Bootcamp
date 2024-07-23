const Holidays = require('date-holidays');
const hd = new Holidays('IL');

function timeUntilNextHoliday() {
    const now = new Date();
    const year = now.getFullYear();
    
    const holidays = hd.getHolidays(year);
    let nextHoliday = holidays.find(holiday => new Date(holiday.date) > now);

    if (!nextHoliday) {
        nextHoliday = hd.getHolidays(year + 1)[0];
    }

    const holidayName = nextHoliday.name;
    const nextHolidayDate = new Date(nextHoliday.date);

    const timeDifference = nextHolidayDate - now; 

    const secondsInADay = 86400;
    const secondsInAnHour = 3600;
    const secondsInAMinute = 60;

    const totalSeconds = Math.floor(timeDifference / 1000);
    const days = Math.floor(totalSeconds / secondsInADay);
    const hours = Math.floor((totalSeconds % secondsInADay) / secondsInAnHour);
    const minutes = Math.floor((totalSeconds % secondsInAnHour) / secondsInAMinute);
    const seconds = totalSeconds % secondsInAMinute;

    return {
        today: now.toDateString(),
        holiday: holidayName,
        days,
        hours,
        minutes,
        seconds
    };
}

module.exports = timeUntilNextHoliday;
