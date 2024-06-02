//Function to handle getting location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

//Function to display position
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const locationOutput = document.getElementById('locationOutput');
    locationOutput.textContent = `Latitude: ${latitude}\nLongitude: ${longitude}`;
}

//Add event listener to the button
document.getElementById('getLocationBtn').addEventListener('click', getLocation);
