async function fetchData() {
    // Simulate fetching data from an API
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

async function processData() {
    try {
        // Wait for fetchData to complete and get its result
        const data = await fetchData();
        console.log("Data:", data);
        console.log("Data processing...");
        // Simulate data processing
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Data processed successfully!");
    } catch (error) {
        console.error("Error:", error);
    }
}

processData();
