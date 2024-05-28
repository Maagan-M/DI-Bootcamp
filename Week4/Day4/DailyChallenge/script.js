//Array of planet objects with their respective colors and moons
let solarSystem = [
    { name: "Mercury", color: "gray", moons: [] },
    { name: "Venus", color: "yellow", moons: [] },
    { name: "Earth", color: "blue", moons: ["Moon"] },
    { name: "Mars", color: "red", moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", color: "orange", moons: ["Io", "Europa", "Ganymede", "Callisto"] },
    { name: "Saturn", color: "goldenrod", moons: ["Titan", "Enceladus", "Mimas"] },
    { name: "Uranus", color: "lightblue", moons: ["Miranda", "Ariel", "Umbriel", "Titania", "Oberon"] },
    { name: "Neptune", color: "darkblue", moons: ["Triton", "Nereid"] }
];

//Select the section where the planets will be added
let listPlanetsSection = document.querySelector('.listPlanets');

//Create a moon
function createMoon(moonName) {
    let moon = document.createElement('div');
    moon.classList.add('moon');
    // Position the moon randomly around the planet
    moon.style.top = `${Math.random() * 100}px`;
    moon.style.left = `${Math.random() * 100}px`;
    return moon;
}

//Loop through the solarSystem array to create planets and their moons
solarSystem.forEach(planet => {
    //Create a div for each planet
    let planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.style.backgroundColor = planet.color;

    //Add the planet name
    let planetName = document.createElement('div');
    planetName.textContent = planet.name;
    planetDiv.appendChild(planetName);

    //Create and append moons
    planet.moons.forEach(moonName => {
        let moonDiv = createMoon(moonName);
        planetDiv.appendChild(moonDiv);
    });

    //Append the planet div to the listPlanets section
    listPlanetsSection.appendChild(planetDiv);
});
