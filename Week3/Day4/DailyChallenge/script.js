//Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
//For example, “The movie is not that bad, I like it”.
const sentence = "The movie is not that bad, I like it"

//Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
const wordNot = sentence.search("not")
console.log('wordNot:', wordNot)

//Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
const wordBad = sentence.search("bad")
console.log('wordBad:', wordBad)

//If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
//For example, the result here should be : “The movie is good, I like it”
//If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
const i = sentence.slice(0, wordNot)
const iI = sentence.slice(wordBad + 3)
if (wordBad > wordNot){
    console.log(i + "tremendously good" + iI)
} else {console.log(sentence)
}