# Task Manager Web Application

## Project Overview
The **Task Manager Web Application** is designed to help users create, display, and manage tasks efficiently. It features input validation, dynamic UI updates, and API integration for data persistence.

## Features
- **Task Creation:** Users can enter task details such as title, description, color, start date, status, and budget.
- **Dynamic Task Display:** Tasks appear instantly in the UI upon creation.
- **Data Persistence:** Tasks are stored on a remote server via an API.
- **Task Deletion:** Users can clear all tasks from the UI and server.
- **Responsive UI:** Optimized for various screen sizes and includes improved styling.

## Technologies Used
- **HTML5** – Structure and form elements.
- **CSS3 & Bootstrap** – Styling, layout, and responsiveness.
- **JavaScript & jQuery** – Event handling, form validation, and DOM manipulation.
- **AJAX & API Integration** – For sending and retrieving task data from a remote server.
- **Git & GitHub** – Version control and project management.

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- A modern web browser (Chrome, Firefox, Edge, Safari)
- A text editor (VS Code, Sublime Text, etc.)
- Git (for version control)

### Clone the Repository
```sh
git clone git@github.com:qoryhanisagal/106-Competency-Report.git
cd main
```

### Open the Project
- Open `index.html` in a browser.
- Alternatively, you can use **Live Server** in VS Code for a better experience.

## Usage
1. **Add a Task:** Fill in the task details and click "Add Task" to create a new task.
2. **View Tasks:** Created tasks appear in the list dynamically.
3. **Delete All Tasks:** Click "Clear All Tasks" to remove all tasks.
4. **Refresh and Persist Data:** Tasks are stored on the server and loaded upon page refresh.

## API Endpoints
- **POST** `http://fsdiapi.azurewebsites.net/api/tasks/` – Saves a new task.
- **GET** `http://fsdiapi.azurewebsites.net/api/tasks` – Retrieves all tasks.
- **DELETE** `http://fsdiapi.azurewebsites.net/api/tasks/clear/KoireeTask` – Deletes all user tasks.

## Known Issues & Fixes
- **Tasks Not Displaying on Refresh**: Ensured `loadTask()` correctly fetches stored tasks.
- **Incorrect Budget Formatting**: Used `parseFloat(task.budget).toFixed(2)` to standardize numbers.
- **Event Listeners Not Triggering**: Wrapped in `$(document).ready()` to ensure the DOM is fully loaded.

## Next Steps
- **Edit Feature:** Allow users to modify existing tasks.
- **Task Filtering:** Implement filtering by task status.
- **Drag & Drop Sorting:** Enable easy task reordering.
- **Improved Notifications:** Add success/error messages for better UX.

 
