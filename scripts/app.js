// app.js - This script is located in the 'scripts' folder of the project.

function saveTask() {
    console.log("Saving task..."); // Logging to indicate task save process is starting

    // Get values from input fields
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title, description, color, date, status, budget); // Logging retrieved values

    // Build an object containing task details
    let taskToSave = new Task(title, description, color, date, status, budget);
    console.log(taskToSave); // Logging the created task object

    // Send the task object to the server using an AJAX POST request
    $.ajax({
        type: "POST", // Defines request type as POST (sending data)
        url: "http://fsdiapi.azurewebsites.net/api/tasks/", // API endpoint for saving tasks
        data: JSON.stringify(taskToSave), // Convert object to JSON string for transmission
        contentType: "application/json", // Specify JSON format
        success: function (response) {
            console.log(response); // Log server response when successful
        },
        error: function (error) {
            console.log(error); // Log error if request fails
        },
    });

    // Display the task on the UI (this function is assumed to exist elsewhere)
    // displayTask(taskToSave);
}

function testRequests() {
    // Test request to check if server is reachable
    $.ajax({
        type: "GET", // Defines request type as GET (retrieving data)
        url: "http://fsdiapi.azurewebsites.net", // Test API endpoint
        success: function (response) {
            console.log(response); // Log successful server response
        },
        error: function (error) {
            console.log(error); // Log error if request fails
        },
    });
}

function displayTask(task) {
    // Construct HTML syntax to display task details dynamically
    let syntax = `
    <div class="task" style="border-color:${task.color}">
        <div class="info">
            <h3>${task.title}</h3>
            <p>${task.desc}</p>
        </div>
        <label class="status">${task.status}</label>
        <div class="dateBudget">
            <label>${task.startdate}</label>
            <label>${task.budget}</label>
        </div>
    </div>`;

    // Append the generated HTML to the pending tasks section
    $(".pendingTask").append(syntax);
}

function loadTask() {
    // Retrieve saved tasks from the server
    $.ajax({
        type: "GET", // Defines request type as GET (retrieving data)
        url: "http://fsdiapi.azurewebsites.net/api/tasks", // API endpoint for fetching tasks
        success: function (res) {
            console.log(res); // Log raw JSON response
            let data = JSON.parse(res); // Convert JSON response to JavaScript object
            console.log(data); // Log parsed data

            // Filter tasks belonging to a specific user (assumed name "Adrian55")
            for (let i = 0; i < data.length; i++) {
                let task = data[i];
                if (task.name == "Adrian55") {
                    displayTask(task); // Display user's tasks on the UI
                }
            }
        },
        error: function (error) {
            console.log(error); // Log error if request fails
        },
    });
}

function init() {
    console.log("Initializing application..."); // Log when initialization begins

    // Load existing tasks from the server
    loadTask();

    // Attach event listener to the save button
    $("#btnSave").click(saveTask);
}

// Execute initialization function when the page loads
window.onload = init;
