// task.js - This script is located in the 'scripts' folder of the project.
// I'm using this file to define the Task class, which will represent individual tasks in my application.

class Task {
    /**
     * Constructor for the Task class.
     * I use this function to initialize a new task whenever one is created.
     * 
     * @param {string} title - The title of the task.
     * @param {string} description - A brief description of the task.
     * @param {string} color - The color code associated with the task (used for UI styling).
     * @param {string} startDate - The start date of the task (formatted as a string).
     * @param {string} status - The current status of the task (e.g., "New", "In Progress", "Completed").
     * @param {number} budget - The allocated budget for the task.
     */
    constructor(title, description, color, startDate, status, budget) {
        // Assigning values to the class properties so that each Task object stores its own details.

        this.title = title; // I store the task title here so it can be displayed in the UI.
        this.desc = description; // I store the task description here for easy reference.
        this.color = color; // This will be used to visually distinguish tasks in the UI.

        this.startDate = startDate; // This holds the task's start date, which helps with scheduling.

        this.status = status; // This tracks whether the task is new, in progress, completed, or canceled.

        // I'm ensuring the budget is stored as a number, in case calculations are needed later.
        this.budget = parseFloat(budget);

        // I'm assigning a hardcoded name to each task (this might be dynamic in a real application).
        // If user authentication were implemented, this could be replaced with the logged-in user's name.
        this.name = "KoireeTask"; 
    }
}

// I will use this Task class to create Task objects throughout my application.
// Whenever I create a new task, I’ll instantiate this class with user input from the form.