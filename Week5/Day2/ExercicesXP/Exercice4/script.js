document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault(); //Prevent the form from submitting

    //Get the value of the radius input
    const radius = document.getElementById('radius').value;

    //Validate the input to make sure it's a number and greater than zero
    if (radius && !isNaN(radius) && radius > 0) {
        //Calculate the volume of the sphere
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);

        //Display the volume in the volume input field
        document.getElementById('volume').value = volume.toFixed(2);
    } else {
        alert('Please enter a valid radius greater than zero.');
    }
});
