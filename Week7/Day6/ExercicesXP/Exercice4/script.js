const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Displaying the colors in the desired order
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Check if at least one element of the array is equal to "Violet"
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}
