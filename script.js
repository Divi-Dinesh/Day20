// Function to fetch student details using promises
function fetchStudentDetails(studentId) {
    return new Promise((resolve, reject) => {
        // Simulate an API request; replace this with your API endpoint
        setTimeout(() => {
            const studentData = {
                name: "Dina",
                age: 20,
                major: "Computer Science",
            };
            resolve(studentData);
        }, 1000); // Simulated delay of 1 second
    });
}

// Function to display student details
function displayStudentDetails(details) {
    const studentDetailsElement = document.getElementById("studentDetails");
    studentDetailsElement.innerHTML = `
        <h2>Student Details</h2>
        <p><strong>Name:</strong> ${details.name}</p>
        <p><strong>Age:</strong> ${details.age}</p>
        <p><strong>Major:</strong> ${details.major}</p>
    `;
}

// Event listener for the fetch button
document.getElementById("fetchButton").addEventListener("click", () => {
    const studentId = document.getElementById("studentId").value;

    fetchStudentDetails(studentId)
        .then((studentDetails) => {
            displayStudentDetails(studentDetails);
        })
        .catch((error) => {
            console.error("Error fetching student details:", error);
        });
});
