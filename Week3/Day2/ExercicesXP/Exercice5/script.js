typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: decimal
// Actual: number

typeof(NaN)
// Prediction: "Not a Number"
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean 
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean, for the only answer is 'true'
// Actual: boolean

"hamburger" + "s"
// Prediction: hambergers (concatenation)
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: hamburger
// Actual: NaN a numerical operation with strings here, you cannot concatenate

"1" + "3"
// Prediction: 13 concatenation of strings
// Actual: 13

"1" - "3"
// Prediction: NaN
// Actual: -2 it coerces into numbers

"johnny" + 5
// Prediction: johnny5, concatenation, its 5 next to johnny
// Actual:johnny5

"johnny" - 5
// Prediction: NaN johnny is not a number
// Actual: NaN

99 * "hello"
// Prediction: Nan hello is a string and 99 a number
// Actual: Nan

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false