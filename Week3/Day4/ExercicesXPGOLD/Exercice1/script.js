//Hint: Use Switch Case
//Ask the user which language they speak language 
let language = prompt("Which language do you speak?");

//Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”
language = language.toLowerCase();

//Create a few conditions :
//If the user speaks French : display “Bonjour”
//If the user speaks English : display “Hello”
//If the user speaks Hebrew : display “Shalom”
//If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
switch (language) {
    case 'français':
        console.log("Bonjour");
        break;
    case 'english':
        console.log("Hello");
        break;
    case 'עברית':
        console.log("שלום");
        break;
    default:
        console.log("01110011 01101111 01110010 01110010 01111001");
}