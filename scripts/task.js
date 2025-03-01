// task.js - This script is located in the 'scripts' folder of the project.

class Task {
    /**
     * Constructor for the Task class.
     * This function initializes a new task with the provided details.
     * 
     * @param {string} title - The title of the task.
     * @param {string} description - A brief description of the task.
     * @param {string} color - The color code associated with the task.
     * @param {string} startdate - The start date of the task.
     * @param {string} status - The current status of the task (e.g., pending, completed).
     * @param {number} budget - The allocated budget for the task.
     */
    constructor(title, description, color, startdate, status, budget) {
        // Assigning values to the class properties
        this.title = title; // Storing the task title
        this.desc = description; // Storing the task description
        this.color = color; // Assigning a color for UI display
        this.startdate = startdate; // Storing the task's start date
        this.status = status; // Storing the current task status
        this.budget = budget; // Storing the allocated budget
        this.name = "KoireeTask"; // Hardcoded name (this might be dynamic in a real app???)
    }
}

// This class will be used to create Task objects, which will be handled in other parts of the application.
