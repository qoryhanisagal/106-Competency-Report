# Supplemental Notes from Tutor: JavaScript and jQuery Solutions

## **Key Terms and Concepts from Lecture**

This document supplements the main class notes by incorporating **specific terminology and explanations** as mentioned in the lecture.

---

## **1. Basic DOM Manipulation**

### **Key Terms:**
- **Document Object Model (DOM):** The tree structure representation of an HTML document.
- **Nodes:** The individual elements within the DOM tree (e.g., `<div>`, `<p>`).
- **Selectors:** Methods for selecting elements in the DOM (`getElementById`, `querySelector`).
- **Event Listeners:** Functions that execute when an event (like a click) occurs.
- **DOM Traversal:** Moving through elements using properties like `parentNode`, `childNodes`, `nextSibling`.
- **Mutation:** Changing the DOM structure dynamically using JavaScript.

### **Key Concepts from Lecture:**
- The DOM is constructed **dynamically** by the browser when a webpage is loaded.
- The **DOM Tree Structure** consists of nodes, where each node represents an element, text, or attribute.
- JavaScript interacts with the DOM using **methods** and **properties**:
  - **`document.getElementById("example")`** selects an element by ID.
  - **`document.querySelector(".example-class")`** selects the first matching class.
- **Best Practices:**
  - Minimize DOM manipulations in loops to **avoid performance bottlenecks**.
  - Use `documentFragment` for **batch modifications** to avoid excessive re-rendering.
  
### **Tutor Example from Lecture:**
#### **Changing the Text Content of a Heading**
```javascript
let heading = document.getElementById("main-title");
heading.textContent = "Updated Title";
```
---

## **2. Client-Server Communication**

### **Key Terms:**
- **Client:** The user’s browser requesting information.
- **Server:** The remote machine that processes and returns data.
- **HTTP Requests:** The method used to fetch data (`GET`, `POST`, `PUT`, `DELETE`).
- **AJAX (Asynchronous JavaScript and XML):** A method to update parts of a webpage without reloading it.
- **JSON (JavaScript Object Notation):** A lightweight format for exchanging data between client and server.
- **REST API:** A standardized way for web applications to communicate with servers.
- **Status Codes:** Server response indicators (`200 OK`, `404 Not Found`, `500 Internal Server Error`).

### **Key Concepts from Lecture:**
- Web communication follows a **request-response cycle**:
  1. The **client sends a request** (browser requests a webpage or data).
  2. The **server processes the request** and retrieves data.
  3. The **server sends a response** back to the client.
  4. The **client processes and displays** the received data.
- APIs return **JSON-formatted** data, which JavaScript can parse and use dynamically.
- **AJAX** allows fetching data in the background without refreshing the page.

### **Tutor's Example from Lecture:**
#### **Making an API Request using Fetch**
```javascript
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data", error));
```

---

## **3. jQuery Solutions**

### **Key Terms:**
- **jQuery:** A JavaScript library that simplifies DOM manipulation and AJAX requests.
- **$ (Dollar Sign Selector):** Used to select elements (e.g., `$("#id")`).
- **Chaining:** Executing multiple jQuery methods in a single statement.
- **Event Handling:** Methods like `.click()`, `.hover()`, `.on()`, `.off()`.
- **Effects and Animations:** Built-in jQuery functions like `.fadeIn()`, `.fadeOut()`, `.slideToggle()`.
- **AJAX in jQuery:** `.ajax()`, `.get()`, `.post()` methods for handling server requests.

### **Key Concepts from Lecture:**
- jQuery simplifies JavaScript by **reducing code length** and improving readability.
- The **`$(document).ready()`** method ensures code runs only after the page is fully loaded.
- **Event handling is more efficient** in jQuery than raw JavaScript due to **event delegation**.
- **AJAX in jQuery** is simpler than the native Fetch API.

### **Tutor's Example from Lecture:**
#### **Hiding an Element with jQuery**
```javascript
$("#myDiv").hide();
```

#### **Handling a Button Click in jQuery**
```javascript
$("#myButton").click(function() {
    alert("Button clicked!");
});
```

---

## **Final Summary & Recap**
### **Key Takeaways from Lecture:**
✅ The **DOM** represents a webpage as a tree structure, which JavaScript manipulates dynamically.
✅ **Client-Server Communication** enables fetching and sending data between web applications and servers.
✅ **jQuery simplifies JavaScript** by offering shortcuts for DOM manipulation, event handling, and AJAX.

### **Best Practices from Lecture:**
✔️ Minimize excessive DOM manipulations to improve performance.
✔️ Always handle **errors in API requests** to avoid unexpected crashes.
✔️ Use **event delegation** in jQuery to handle dynamic elements efficiently.
✔️ Prefer **chaining jQuery methods** to reduce redundant code.


