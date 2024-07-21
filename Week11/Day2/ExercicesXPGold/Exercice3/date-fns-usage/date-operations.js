const { format, addDays } = require('date-fns');

function performDateOperations() {
    const now = new Date();

    const futureDate = addDays(now, 5);

    const formattedDate = format(futureDate, 'yyyy-MM-dd HH:mm:ss');

    console.log(`Current Date: ${format(now, 'yyyy-MM-dd HH:mm:ss')}`);
    console.log(`Date after adding 5 days: ${formattedDate}`);
}

module.exports = performDateOperations;
