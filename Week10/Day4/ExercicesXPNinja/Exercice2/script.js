let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};
//It returns a Promise that resolves with the string "slow" after 2 seconds.

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

//The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

let concurrentPromise = function () {
    console.log('==CONCURRENT START with Promise.all==');
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
        console.log(messages[0]);
        console.log(messages[1]);
    });
}
//It demonstrates concurrent execution using Promise.all().

setTimeout(concurrentPromise, 1000)
//It schedules the execution of concurrentPromise after 1 second.
//outcome: ==CONCURRENT START with Promise.all==
//starting slow promise
//starting fast promise
//fast promise is done
//slow promise is done
//fast
//slow
