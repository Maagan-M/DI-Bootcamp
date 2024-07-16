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

let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==');
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))()
    ]);
}
//It demonstrates parallel execution using Promise.all() with await.

setTimeout(parallel, 5000)
//It schedules the execution of parallel function after 5 seconds.
//outcome: ==PARALLEL with await Promise.all==
//starting slow promise
//starting fast promise
//fast promise is done
//slow promise is done
//fast
//slow
