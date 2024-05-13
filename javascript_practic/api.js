function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched successfully:', data);
            return data;
        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
            throw error;
        });
}

fetchData()
    .then(data => {
        // Process the fetched data further if needed
        console.log('Data processed:', data);
    })
    .catch(error => {
        // Handle errors that occurred during fetching or processing
        console.error('Error occurred:', error);
    });
