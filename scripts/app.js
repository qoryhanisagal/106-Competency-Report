$(document).ready(function () {
    function saveTask() {
        console.log("✅ saveTask() function was called!"); // Debugging Step 1
    
        // Get values from input fields
        const title = $("#txtTitle").val().trim();
        const description = $("#txtDescription").val().trim();
        const color = $("#selColor").val();
        const startDate = $("#selDate").val();
        const status = $("#selStatus").val();
        const budget = $("#numBudget").val();
    
        // ✅ Debugging Step 2: Log values before validation
        console.log("Captured Values:");
        console.log("Title:", title);
        console.log("Description:", description);
        console.log("Color:", color);
        console.log("Start Date:", startDate);
        console.log("Status:", status);
        console.log("Budget:", budget);
    
        // Validation: Ensure required fields are not empty
        if (!title || !description || !startDate || !budget) {
            alert("⚠ Please fill in all required fields.");
            console.error("❌ ERROR: Missing required fields!");
            return;
        }
    
        // ✅ Debugging Step 3: Confirm Task Object is Created
        let taskToSave = new Task(title, description, color, startDate, status, budget);
        console.log("✅ Task Object Created:", taskToSave);
    
        // Call function to display task in the UI
        displayTask(taskToSave);

        // Send task to server
        $.ajax({
            type: "POST",
            url: "http://fsdiapi.azurewebsites.net/api/tasks/",
            data: JSON.stringify(taskToSave),
            contentType: "application/json",
            success: function (response) {
                console.log("✅ Task saved to server:", response);
            },
            error: function (error) {
                console.error("❌ Error saving task:", error);
            },
        });

        // Clear form after submission
        $("#taskForm")[0].reset();
    } // ✅ Fixed misplaced closing brace

    function displayTask(task) {
        console.log("✅ displayTask() function called with:", task);
    
        // Ensure budget is a valid number
        let formattedBudget = parseFloat(task.budget).toFixed(2);
    
        // Format the date correctly
        let formattedDate = task.startDate 
            ? new Date(task.startDate).toLocaleString() 
            : "No Date";
    
        let syntax = `
            <div class="task" style="border-color:${task.color}">
                <div class="info">
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                </div>
                <label class="status">${task.status}</label>
                <div class="dateBudget">
                    <label>${formattedDate}</label>  
                    <label style="margin-left:auto; font-weight:bold;">$${formattedBudget}</label> 
                </div>
            </div>`;
    
        $(".pendingTask").append(syntax);
        console.log("✅ Task successfully added to UI!");
    }

    function loadTask() {
        $(".pendingTask").empty(); // ✅ Clears previous tasks

        $.ajax({
            type: "GET", 
            url: "http://fsdiapi.azurewebsites.net/api/tasks", 
            success: function (res) { 
                console.log("Retrieved tasks:", res); 
                let data = JSON.parse(res); 

                for (let i = 0; i < data.length; i++) {
                    let task = data[i];
                    if (task.name === "KoireeTask") {
                        displayTask(task);
                    }
                }
            },
            error: function (error) {
                console.log("Error loading tasks:", error);
            },
        });
    }

    function clearTasksFromServer() {
        $.ajax({
            type: "DELETE",
            url: "http://fsdiapi.azurewebsites.net/api/tasks/clear/KoireeTask", 
            success: function (response) {
                console.log("All tasks deleted from server:", response);
                $(".pendingTask").empty();
            },
            error: function (error) {
                console.log("Error clearing tasks:", error);
            },
        });
    }

    function init() {
        console.log("✅ Initializing application..."); // Debugging log
    
        // Check if #btnSave exists before attaching event
        if ($("#btnSave").length) {
            console.log("✅ Button #btnSave exists in the DOM.");
            $("#btnSave").click(saveTask);
        } else {
            console.error("❌ ERROR: #btnSave does NOT exist in the DOM.");
        }
    
        loadTask(); // Load tasks when app initializes
        $("#btnClear").click(clearTasksFromServer);
    }

    window.onload = init;
});