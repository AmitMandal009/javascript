function doSomethingAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() < 0.5; // Randomly decide success or failure
            if (success) {
                resolve("Operation successful!");
            } else {
                reject(new Error("Operation failed!"));
            }
        }, 1000);
    });
}

function successCallback(message) {
    console.log("Success:", message);
}

function errorCallback(error) {
    console.error("Error:", error.message);
}

function anotherSuccessCallback(message) {
    console.log("Another Success:", message);
}

doSomethingAsync()
    .then(successCallback)
    .catch(errorCallback)
    .then(() => {
        return doSomethingAsync(); // Perform another async operation only if the first one succeeds
    })
    .then(anotherSuccessCallback)
    .catch(errorCallback);

    