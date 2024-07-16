let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};
//It returns a new promise that will be resolved with the string "slow" after 2 seconds.

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};
//It returns a new promise that will be resolved with the string "fast" after 1 second.

let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfter2Seconds();
    console.log(slow);
    const fast = await resolveAfter1Second();
    console.log(fast);
}

sequentialStart()
//It calls resolveAfter2Seconds and waits for it to resolve, then calls resolveAfter1Second and waits for it to resolve, logging the results sequentially.
//outcome: 
//==SEQUENTIAL START==
//starting slow promise
//slow promise is done
//slow
//starting fast promise
//fast promise is done
//fast
