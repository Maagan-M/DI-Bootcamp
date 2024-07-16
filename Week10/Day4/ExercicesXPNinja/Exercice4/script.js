let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};
//It returns a promise that resolves with the string "slow" after 2 seconds.

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};
//It returns a promise that resolves with the string "fast" after 1 second.

// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
}
//It demonstrates parallel execution using Promise.then() without async/await.

setTimeout(parallelPromise, 13000)
//It schedules the execution of parallelPromise after 13 seconds.
//outcome: ==PARALLEL with Promise.then==
//starting slow promise
//starting fast promise
//fast promise is done
//fast
//slow promise is done
//slow
