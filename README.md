# todo-item-card (UPDATED)
initially a lightweight, framework-free Todo Item Card UI component built using HTML, CSS, and Vanilla JavaScript, now a fully interactive Todo Item Card using the same stack. Designed to simulate a real product-level task component with editing, state control, and live time feedback.

## Features
+ Display a todo item (title, description)
+ Mark the task as complete (with visual feedback like strikethrough)
+ Alert to Delete a task
+ Clean and minimal card-based UI
+ Fully responsive layout

### Added Features
+ Toggle task completion (checkbox + status sync)
+ Edit task details (title, description, priority, status, due date)
+ Expand/collapse long descriptions
+ Live countdown for due date (updates every minute)
+ Status-based UI updates (Pending / In Progress / Done)
+ Inline validation with error messaging
+ Separate view mode and edit mode

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

## What Changed from the First Upload
1. Introduction of Edit Mode

   + Added a full edit form UI (`.edit-content`)
   + Toggling between view and edit states using JS (`display: none / flex`)

2. Full State Synchronization

   + Checkbox, status dropdown, and UI are now synced
   + `updateTaskDisplay()` ensures:
      + Visual state (strike-through, colors)
      + Status text
      + Input values all stay consistent

3. Dynamic Time System
   + Added:
      + `updateTimeRemaining()` (day-based logic)
      + `updateLiveTime()` (real-time countdown)
   + Uses `setInterval` to update every 60 seconds

4. Priority-Based Styling
   + Priority now dynamically controls:
      + Badge color
      + Card border-left color

5. Expandable Description
   + Long text is truncated by default using CSS (max-height)
   + JS toggles .expanded class for smooth expansion

6. Validation System Added
   + Prevents saving when:
      + Title
      + Description
      + Due date
         are empty
   + Displays inline error message UI

## New Design Decisions
1. Dual-State UI (View vs Edit)

   Instead of inline editing, the component switches between two full states.

   **Why?**

      + Cleaner UX
      + Easier validation and control

2. JS-Driven UI State (Not Data Models)

   All state lives in the DOM and is updated directly.

   **Why?**

      + Keeps the project framework-free
      + Reduces abstraction

   Implication:
      + This behaves more like a UI prototype than a data-driven app.

3. Centralized Update Logic

   The function `updateTaskDisplay()` acts as a single source of truth for task state.

   **Why?**

      + Prevents scattered UI updates
      + Keeps logic predictable

4. Controlled Inputs Instead of Instant Binding

   Changes are only applied on Save, not live.

   **Why?**

      + Allows validation
      + Matches real-world form patterns

## Known Limitations
1. No Data Persistence
   + All data resets on refresh
   + No localStorage or backend

2. Inline Style Manipulation
   JS directly modifies styles (e.g., colors, textDecoration)

   **Impact:**

      + Harder to scale or theme
      + Would be better handled via CSS classes

## Trade-offs
1. No Framework or Component System
   
   ✔️ Simple and fast to build
   
   ✖️ Harder to scale for large applications

2. No Persistence
   Tasks are not stored (no localStorage or backend)

   ✔️ Keeps the app simple
   
   ✖️ Data is lost on refresh

3. Basic Accessibility
   Accessibility features (ARIA roles, keyboard navigation) are minimal.
   
   ✔️ Faster development
   
   ✖️ Not fully inclusive yet

## Summary
This project has evolved into a high-fidelity UI component that simulates real product behavior:

   + Multi-state interface (view/edit)
   + Rich interaction logic
   + Live time-based feedback
   + Strong visual communication

It’s no longer just a static card — it’s a mini task management system at component level, built entirely with core web technologies.