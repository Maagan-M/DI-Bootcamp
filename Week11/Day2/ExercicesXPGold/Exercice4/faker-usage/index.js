const faker = require('faker');
const inquirer = require('inquirer');

const users = [];

// Function to add a fake user to the users array
function addFakeUser() {
    const user = {
        name: faker.name.findName(),
        address: faker.address.streetAddress(),
        country: faker.address.country(),
    };
    users.push(user);
    console.log('Added fake user:', user);
}

// Function to prompt the user for their details and add to the users array
async function addUserFromPrompt() {
    try {
        const answers = await inquirer.prompt([
            { type: 'input', name: 'name', message: 'Enter your name:' },
            { type: 'input', name: 'address', message: 'Enter your address street:' },
            { type: 'input', name: 'country', message: 'Enter your country:' },
        ]);
        users.push(answers);
        console.log('Added user:', answers);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Adding a few fake users for demonstration
for (let i = 0; i < 3; i++) {
    addFakeUser();
}

// Prompting the user for their details
addUserFromPrompt().then(() => {
    console.log('Final users array:', users);
});

