# Dynamic To-Do List (JavaScript)

This project is a simple yet interactive **To-Do List Application** built using **HTML**, **CSS**, and **JavaScript**.  
It demonstrates **advanced DOM manipulation** and **Local Storage** integration, allowing users to **add**, **display**, **remove**, and **persist** tasks across browser sessions.

---

## Features
- **Add Tasks**: Users can type in a task and add it by clicking the button or pressing the Enter key.
- **Remove Tasks**: Each task has a "Remove" button to delete it from the list.
- **Keyboard Support**: Pressing Enter in the input field will also add the task.
- **Persistent Storage**: Tasks are saved in the browser's Local Storage and remain after refreshing or closing the page.
- **Responsive Design**: Clean, centered layout that works on various screen sizes.

---

## Project Structure
dynamic-to-do-list-js/
│
├── index.html # Main HTML structure
├── styles.css # Styling for the application
├── script.js # JavaScript for DOM manipulation & Local Storage
└── README.md # Project documentation

---

## Technologies Used
- **HTML5** – Structure of the app
- **CSS3** – Styling and layout
- **JavaScript (ES6)** – Functionality, DOM manipulation, and Local Storage

---

## How It Works
1. **Page Load**:
   - The script waits for the `DOMContentLoaded` event before running.
   - The `loadTasks()` function retrieves saved tasks from Local Storage and renders them in the DOM.
2. **Adding Tasks**:
   - The `addTask()` function creates a `<li>` element for the task and appends a **Remove** button using `classList.add('remove-btn')`.
   - If the task is added by the user, it is saved to Local Storage.
3. **Removing Tasks**:
   - Clicking the Remove button deletes the task from the DOM and updates Local Storage immediately.
4. **Persistence**:
   - All tasks are stored in Local Storage in JSON format (`localStorage.setItem('tasks', JSON.stringify(tasks))`).
   - Tasks are automatically restored on the next visit.

---

## Technologies Used
- **HTML5** – Structure of the app
- **CSS3** – Styling and layout
- **JavaScript (ES6)** – Functionality and DOM manipulation

---

## How It Works
1. **Page Load**: The script waits for the `DOMContentLoaded` event before running to ensure all HTML is loaded.
2. **Adding Tasks**:
   - The user enters a task in the input field and clicks **"Add Task"** or presses **Enter**.
   - The `addTask` function creates:
     - A `<li>` element with the task text.
     - A **Remove** button with the CSS class `remove-btn` (assigned using `classList.add`).
   - The button has an `onclick` event that removes the task from the list.
3. **Clearing Input**: After adding a task, the input field is cleared for the next entry.

---

## How to Use
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/dynamic-to-do-list-js.git
2. Open index.html in your preferred browser.
3. Type a task into the input field.
4. Click "Add Task" or press Enter to add it.
5. Click the "Remove" button beside a task to delete it.