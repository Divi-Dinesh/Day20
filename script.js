// Example of using Fetch API with Promises
function fetchData() {
  fetch('your-api-url')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          // Process and display data on the web page
      })
      .catch(error => {
          console.error('Error:', error);
      });
}


