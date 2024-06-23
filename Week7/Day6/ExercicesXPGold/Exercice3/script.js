function cleanArray(arr) {
    const cleanedArray = arr.filter(item => {
        return item !== null &&      
               item !== 0 &&         
               item !== "" &&        
               item !== false &&     
               item !== undefined && 
               !Number.isNaN(item); 
    });

    return cleanedArray;
}

// Example
const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
const cleanedArray = cleanArray(sampleArray);
console.log(cleanedArray); 
