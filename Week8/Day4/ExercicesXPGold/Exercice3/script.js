const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
});
//The value of "i" will be 0, 1, 2, 3, 4, and 5 in the respective iterations.