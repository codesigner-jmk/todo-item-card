# todo-item-card
A lightweight, framework-free Todo Item Card UI component built using HTML, CSS, and Vanilla JavaScript.
This project focuses on simplicity, clarity, and clean UI behavior without relying on external libraries or frameworks.

## Features
+ Display a todo item (title, description)
+ Mark the task as complete (with visual feedback like strikethrough)
+ Alert to Delete a task
+ Clean and minimal card-based UI
+ Fully responsive layout

## How to Run Locally
1. Clone the repository
   > **git** clone https://github.com/codesigner-jmk/todo-item-card.git
  
   > **cd** todo-item-card

2. Open the project
    Since this is a static project, no installation is required.

    You can simply open the `index.html` file in your browser:

    Double-click` index.html`, or
    Right-click → Open with browser

### Optional (Recommended)
If you use a code editor like VS Code:

  1. Install the Live Server extension
  2. Right-click index.html
  3. Click “Open with Live Server”

  This gives you auto-reload while editing.

## Decisions Made
1. Vanilla JavaScript Instead of Frameworks
   The project uses plain JavaScript for all interactions.

   **Why?**

    + Keeps the project lightweight
    + No build tools or setup required
    + Good for learning core DOM manipulation

2. Simple File Structure
     All logic and styling are separated into three core files:

      + `index.html`
      + `style.css`
      + `script.js`
     
     **Why**

      + Easy to understand and navigate
      + Beginner-friendly
3. Event-Driven Interactions
   User actions (check, delete) are handled using event listeners.

   **Why?**

     + Clean and scalable interaction pattern
     + Easy to extend with more features

## Trade-offs
1. No Framework or Component System
   
   ✔️ Simple and fast to build
   
   ✖️ Harder to scale for large applications
3. No Persistence
   Tasks are not stored (no localStorage or backend)

   ✔️ Keeps the app simple
   
   ✖️ Data is lost on refresh
5. Basic Accessibility
   Accessibility features (ARIA roles, keyboard navigation) are minimal.
   
   ✔️ Faster development
   
   ✖️ Not fully inclusive yet

## Summary
This project is a clean, minimal implementation of a todo card using only core web technologies. It’s ideal for learning, prototyping, or serving as a base for a larger task management application.
