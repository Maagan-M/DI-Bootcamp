const users = { user1: 18273, user2: 92833, user3: 90315 };
const usersArray = Object.entries(users);
console.log(usersArray); 
//[ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

const modifiedUsersArray = usersArray.map(([key, value]) => [key, value * 2]);
console.log(modifiedUsersArray); 
//[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
