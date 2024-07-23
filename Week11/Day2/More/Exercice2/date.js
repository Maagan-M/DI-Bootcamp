const readlineSync = require('readline-sync');

function calculateMinutesLived(birthdate) {
    const now = new Date();
    const birthDate = new Date(birthdate);
    
    if (isNaN(birthDate.getTime())) {
        throw new Error('Invalid date format');
    }

    const timeDifference = now - birthDate; 

    const minutesLived = Math.floor(timeDifference / (1000 * 60));
    return minutesLived;
}

const birthdate = readlineSync.question('Please enter your birthdate (YYYY-MM-DD): ');

module.exports = () => calculateMinutesLived(birthdate);
