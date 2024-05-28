//Have you heard the infamous song “99 Bottles of Beer?”
//In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.
//Prompt the user for a number to begin counting down bottles.
//In the song, everytime a bottle drops, the subtracted number should go up by 1.
function singBeerSong() {
    let bottles = parseInt(prompt("Enter the number of bottles to start with:"));
    
    if (isNaN(bottles) || bottles <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    let subtract = 1;

    while (bottles > 0) {
        let nextBottleCount = bottles - subtract;

        console.log(`${bottles} bottle${bottles > 1 ? 's' : ''} of beer on the wall`);
        console.log(`${bottles} bottle${bottles > 1 ? 's' : ''} of beer`);
        console.log(`Take ${subtract} down, pass ${subtract > 1 ? 'them' : 'it'} around`);

        if (nextBottleCount <= 0) {
            console.log("No bottle of beer on the wall");
        } else {
            console.log(`${nextBottleCount} bottle${nextBottleCount > 1 ? 's' : ''} of beer on the wall`);
        }

        bottles = nextBottleCount;
        subtract++;
    }
}
singBeerSong();
