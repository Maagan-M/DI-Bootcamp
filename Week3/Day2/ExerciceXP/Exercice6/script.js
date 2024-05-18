5 + "34"
// Prediction: 534, 24 here is not a number but a string, it's concetenation
// Actual: 534

5 - "4"
// Prediction: 1 for 4 is coerced into a number
// Actual: Nan

10 % 5
// Prediction: 0, for 5+5=10 there is nothing left
// Actual: 0

5 % 10
// Prediction: 5 for 10 does not go into 5, you cannot divide 5 by 10 even once
// Actual: 5

" " + " "
// Prediction: '  ', there will be 2 empty spaces for the 2 strings of one space each
// Actual: '  '

" " + 0
// Prediction: ' 0'
// Actual: ' 0'

true + true
// Prediction: addition and not concatenation as boolean, so 2 and true coerces into 1
// Actual: 2

true + false
// Prediction: 1 + 0 = 1 with flase coerces into 0
// Actual: 1

false + true
// Prediction: same as above 1
// Actual: 1

false - true
// Prediction: 0 - 1= -1, same as above
// Actual: -1

!true
// Prediction: the opposite of true is false
// Actual: false

3 - 4
// Prediction: -1, addition of number
// Actual: -1
