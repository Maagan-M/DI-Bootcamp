function displayStudentInfo(objUser){
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

function displayStudentInfo({first, last}){
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
//Your full name is Elie Schoppik
