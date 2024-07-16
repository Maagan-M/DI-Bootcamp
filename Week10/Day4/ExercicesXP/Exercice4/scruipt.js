function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
//This function returns a new Promise that will be resolved with the string 'resolved' after 2 seconds.

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}
//This function is declared as async and will demonstrate the use of await with the resolveAfter2Seconds function.

asyncCall();
//This calls the asyncCall function, starting its execution.

//output: calling and resolved