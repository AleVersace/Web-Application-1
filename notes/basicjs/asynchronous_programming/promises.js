// A Promise is an operation that helps simplify asynchronous programming
// This is a possible solution to callback hell.
// An object that represent the eventual completion or its failure!
// (A promise to supply the value in the future)

const myPromise =           // param is a callback function
    new Promise((resolve, reject) => {  // @param1 and @param2 are also functions!
        /*
            something asynchronous
        */

        resolve(value);     // If all goes well

        // or

        reject("failure reason");   // If the promise got rejected
    });


//  Promise.all() takes an array of Promises as input and returns a Promise
myPromise.all([myPromise, myPromise]).then((_,_) => { /*do something*/ return;});


// How to stop execution until the previous promise is complete:
// Async/Await

const simpleFunction = async() => {     // This is a simplified version of a function that returns a Promise
    return 'test';
}
simpleFunction.then(console.log);


// Prepend await when calling a function to stop the code until the promise is resolved or rejected!
// All of this must be in a function returning a Promise!! (wrap it up:)

async function main() {
    for (let i = 0; i < 100; i++) {
        await simpleFunction();     // These are not threated "in parallel" (asynchronously not concurrently of course)
        await simpleFunction();
        await myPromise();
    }
}

main();