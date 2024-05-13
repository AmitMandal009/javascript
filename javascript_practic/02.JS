function doSomethingAsync(callback) {
    setTimeout(() => {
        callback("Done!");
    }, 1000);
}

function callbackFunction(message) {
    console.log("Callbacks:", message);
}

let faller = doSomethingAsync(callbackFunction);
console.log(faller);

