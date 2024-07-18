import persons from './data.js';

const calculateAverageAge = (persons) => {
  if (persons.length === 0) {
    return 0;
  }

  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  return totalAge / persons.length;
};

const averageAge = calculateAverageAge(persons);
console.log(`Average age of persons: ${averageAge}`);
