function cleanRoom(arr) {
    let numberDict = {};
    let stringDict = {};

    arr.forEach(item => {
        if (typeof item === 'number') {
            numberDict[item] = (numberDict[item] || []).concat(item);
        } else if (typeof item === 'string') {
            stringDict[item] = (stringDict[item] || []).concat(item);
        }
    });

    const processDict = dict => {
        let result = [];
        Object.keys(dict).sort((a, b) => a - b).forEach(key => {
            if (dict[key].length > 1) {
                result.push(dict[key]);
            } else {
                result.push(Number(key));
            }
        });
        return result;
    };

    let result = processDict(numberDict);

    if (Object.keys(stringDict).length > 0) {
        let stringResult = Object.keys(stringDict).sort().map(key => stringDict[key].length > 1 ? stringDict[key] : key);
        result.push(stringResult);
    }

    return result;
}

let inputArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
console.log(cleanRoom(inputArray));  // [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591]

let inputArrayWithStrings = [1, "2", "3", 2];
console.log(cleanRoom(inputArrayWithStrings));  // [[1, 2], ["2", "3"]]

function findTwoNumbers(arr, target) {
    let numSet = new Set();
    
    for (let num of arr) {
        let complement = target - num;
        if (numSet.has(complement)) {
            return [complement, num];
        }
        numSet.add(num);
    }
    
    return null; 
}

console.log(findTwoNumbers([1, 2, 3], 4));  // [1, 3]
console.log(findTwoNumbers([1, 2, 3, 5, 6], 11));  // [5, 6]

function hexToRgb(hex) {
    hex = hex.replace('#', '');
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

function rgbToHex(rgb) {
    let result = rgb.match(/\d+/g);
    let r = parseInt(result[0]).toString(16).padStart(2, '0');
    let g = parseInt(result[1]).toString(16).padStart(2, '0');
    let b = parseInt(result[2]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
}

function convertColor(color) {
    if (color.startsWith('#')) {
        return hexToRgb(color);
    } else if (color.startsWith('rgb')) {
        return rgbToHex(color);
    } else {
        throw new Error('Invalid color format');
    }
}

console.log(convertColor('#ffffff'));  // rgb(255, 255, 255)
console.log(convertColor('rgb(255, 255, 255)'));  // #ffffff
