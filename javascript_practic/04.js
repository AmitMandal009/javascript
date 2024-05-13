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

doSomethingAsync()
    .then(successCallback)
    .catch(errorCallback);


    function doAnotherAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() < 0.5; // Randomly decide success or failure
            if (success) {
                resolve("Another operation successful!");
            } else {
                reject(new Error("Another operation failed!"));
            }
        }, 1500);
    });
}

function anotherSuccessCallback(message) {
    console.log("Another Success:", message);
}

doSomethingAsync()
    .then(successCallback)
    .catch(errorCallback)
    .then(() => {
        return doAnotherAsync(); // Perform another async operation
    })
    .then(anotherSuccessCallback)
    .catch(errorCallback);
