function doSomethingAsync(callback) {
    setTimeout(() => {
        callback("Done!");
    }, 1000);
}

function callbackFunction(message) {
    console.log("Callbacks:", message);
}

doSomethingAsync(callbackFunction);

need to investigate this code 
