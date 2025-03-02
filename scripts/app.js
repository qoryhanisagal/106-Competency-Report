$(document).ready(function () {
    // Attach event listener to form submit
    $("#taskForm").submit(function (event) {
        event.preventDefault(); // Prevents page refresh

        console.log("Saving task..."); // Debug log

        // Get values from input fields
        const title = $("#txtTitle").val().trim();
        const description = $("#txtDescription").val().trim();
        const color = $("#selColor").val();
        const date = $("#selDate").val();
        const status = $("#selStatus").val();
        const budget = $("#numBudget").val();

        // Validation: Check if required fields are empty
        if (!title || !description || !date || !budget) {
            alert("Please fill in all required fields.");
            return;
        }

        // Log the captured input values for debugging
        console.log("Task Data:", title, description, color, date, status, budget);

        // Create a new Task object
        let taskToSave = new Task(title, description, color, date, status, budget);

        console.log("Task Object Created:", taskToSave); // Debug log

        // Call function to display task
        displayTask(taskToSave);

        // Send the task object to the server using an AJAX POST request
        $.ajax({
            type: "POST", // Defines request type as POST (sending data)
            url: "http://fsdiapi.azurewebsites.net/api/tasks/", // API endpoint for saving tasks
            data: JSON.stringify(taskToSave), // Convert object to JSON string for transmission
            contentType: "application/json", // Specify JSON format
            success: function (response) {
                console.log("Task saved to server:", response);
            },
            error: function (error) {
                console.log("Error saving task:", error);
            },
        });

        // Clear form fields after submission
        $("#taskForm")[0].reset();
    });

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
                console.log("Retrieved tasks:", res); // Log raw JSON response
                let data = JSON.parse(res); // Convert JSON response to JavaScript object
                console.log("Parsed task data:", data); // Log parsed data

                // Filter tasks belonging to a specific user (assumed name "KoireeTask")
                for (let i = 0; i < data.length; i++) {
                    let task = data[i];
                    if (task.name == "KoireeTask") {
                        displayTask(task); // Display user's tasks on the UI
                    }
                }
            },
            error: function (error) {
                console.log("Error loading tasks:", error);
            },
        });
    }

    function init() {
        console.log("Initializing application..."); // Log when initialization begins

        // Load existing tasks from the server
        loadTask();
    }

    // Execute initialization function when the page loads
    window.onload = init;
});