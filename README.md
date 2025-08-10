# Dynamic To-Do List (JavaScript)

This project is a simple yet interactive **To-Do List Application** built using **HTML**, **CSS**, and **JavaScript**.  
It demonstrates advanced DOM manipulation by allowing users to **add**, **display**, and **remove** tasks dynamically.

---

## Features
- **Add Tasks**: Users can type in a task and add it by clicking the button or pressing the Enter key.
- **Remove Tasks**: Each task has a dedicated "Remove" button to delete it from the list.
- **Keyboard Support**: Pressing Enter in the input field will also add the task.
- **Responsive Design**: The layout adjusts nicely for different screen sizes.

---

## Project Structure
dynamic-to-do-list-js/
│
├── index.html # Main HTML structure
├── styles.css # Styling for the application
├── script.js # JavaScript for DOM manipulation
└── README.md # Project documentation

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