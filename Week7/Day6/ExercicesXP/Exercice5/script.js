const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

//Function to determine the appropriate ordinal suffix
const getOrdinal = (n) => {
    return (n % 10 === 1 && n % 100 !== 11) ? ordinal[1] :
           (n % 10 === 2 && n % 100 !== 12) ? ordinal[2] :
           (n % 10 === 3 && n % 100 !== 13) ? ordinal[3] :
           ordinal[0];
};

//Display the colors in the desired order with correct ordinals
colors.forEach((color, index) => {
    const position = index + 1;
    console.log(`${position}${getOrdinal(position)} choice is ${color}.`);
});
