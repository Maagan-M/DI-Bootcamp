function timeUntilNewYear() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);
    
    const timeDifference = newYearDate - now; // Time difference in milliseconds

    const secondsInADay = 86400;
    const secondsInAnHour = 3600;
    const secondsInAMinute = 60;

    const totalSeconds = Math.floor(timeDifference / 1000);
    const days = Math.floor(totalSeconds / secondsInADay);
    const hours = Math.floor((totalSeconds % secondsInADay) / secondsInAnHour);
    const minutes = Math.floor((totalSeconds % secondsInAnHour) / secondsInAMinute);
    const seconds = totalSeconds % secondsInAMinute;

    return `${days} days and ${hours}:${minutes}:${seconds} hours`;
}

module.exports = timeUntilNewYear;
