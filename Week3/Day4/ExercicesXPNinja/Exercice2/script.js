//Ask the client for their zip code and console.log “success” or “error” based on the following rules.
//Zip codes consists of 5 numbers
//Must only contain numbers
//Must not contain any whitespace (spaces)
//Must not be greater than 5 digits in length
const zipCode = prompt("enter your zip code:");

if (zipCode.length === 5 && /^\d+$/.test(zipCode)) {
  console.log("success");
} else {
  console.log("error");
}
