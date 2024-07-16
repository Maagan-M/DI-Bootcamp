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

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.log(await slow);
    console.log(await fast);
}
//This async function initiates two promises concurrently and waits for both of them to resolve.

setTimeout(concurrentStart, 4000)
//This line sets a timer to call the concurrentStart function after 4 seconds.
//==CONCURRENT START with await== (after 4 seconds)
//starting slow promise
//starting fast promise
//fast promise is done (after 1 second from start)
//slow promise is done (after 2 seconds from start)
//slow (after 2 seconds from start)
//fast (immediately after "slow" due to await)
