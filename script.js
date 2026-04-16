//to send alert when delete button is clicked
 function deleteFunction() {
    alert("Delete Clicked");
  }


//to open and close edit form when edit and cancel button is clicked respectively
const div1 = document.getElementById('test-todo-content');
const div2 = document.getElementById('test-todo-edit-form');
const openEditForm = document.getElementById('test-todo-edit-button');
const closeEditForm = document.getElementById('test-todo-cancel-button');

openEditForm.addEventListener('click', () => {
    div1.style.display = 'none';
    div2.style.display = 'flex';
});

closeEditForm.addEventListener('click', () => {
    div2.style.display = 'none';
    div1.style.display = 'block';
});


//to toggle description text expansion
const description = document.getElementById('test-todo-description');
const btn = document.getElementById('test-todo-expand-toggle');

btn.addEventListener('click', () => {
    description.classList.toggle('expanded');
    
    // Toggle button text
    if (description.classList.contains('expanded')) {
        btn.textContent = 'Show Less';
    } else {
        btn.textContent = 'Show More';
    }
});


//save changes when save button is clicked

// Select the elements
const saveBtn = document.getElementById('test-todo-save-button');
const editForm = document.getElementById('test-todo-edit-form');
const viewContent = document.getElementById('test-todo-content');
const cardContainer = document.getElementById('test-todo-card');
const statusDot = document.getElementById('status-dot');


// The display elements
const displayTitle = document.getElementById('test-todo-title');
const displayDescription = document.getElementById('test-todo-description');
const displayPriority = document.getElementById('test-todo-priority');
const displayStatus = document.getElementById('status');
const displayDueDate = document.getElementById('test-todo-due-date');
const displayTimeRemaining = document.getElementById('test-todo-time-remaining');

// The input elements
const inputTitle = document.getElementById('test-todo-edit-title-input');
const inputDescription = document.getElementById('test-todo-edit-description-input');
const inputPriority = document.getElementById('test-todo-edit-priority-select');
const inputStatus = document.getElementById('test-todo-status-control');
const inputDueDate = document.getElementById('test-todo-edit-due-date-input');

const checkbox = document.getElementById('test-todo-complete-toggle');
const statusSelect = document.getElementById('test-todo-status-control');
const errorMessage = document.getElementById('error-message');

const title = document.getElementById('test-todo-title');
const statusText = document.getElementById('status');
const timeRemaining = document.getElementById('test-todo-time-remaining');


let countdownInterval; // To store the interval ID for updating time remaining

function updateTaskDisplay(isDone) {
    if (isDone) {
        // Strike through and Mute colors
        title.style.textDecoration = "line-through";
        title.style.color = "#8a919cb6";
        description.style.color = "#8a919cb6";

         // Update Status and Time
        statusText.textContent = "Done";
        timeRemaining.textContent = "Completed";
        statusDot.style.backgroundColor = "#22D3A6"; // Green
        
        // Sync Inputs
        checkbox.checked = true;
        statusSelect.value = "Done";
    } else {
        // Remove Strike and Restore colors
        title.style.textDecoration = "none";
        title.style.color = ""; // Reverts to original CSS
        description.style.color = "";

         // Reset Status and Time (Defaults to Pending logic)
        statusText.textContent = "Pending";
        timeRemaining.textContent = "Due in X days"; // You can call your live timer function here
        statusDot.style.backgroundColor = "#9ca3af"; // Muted
        
        // Sync Inputs
        checkbox.checked = false;
        statusSelect.value = "Pending";
    }
}

// 3. Listener for the Checkbox (Manual Check)
checkbox.addEventListener('change', () => {
    updateTaskDisplay(checkbox.checked);
});

saveBtn.addEventListener('click', () => {

   const isDone = (statusSelect.value === "Done");
    updateTaskDisplay(isDone);

   // for priority badge and card border color change based on selected priority 
  // 1. Get the selected priority
    const selectedPriority = inputPriority.value; 
    
    // 2. Update the text on the card
    displayPriority.textContent = selectedPriority;

    // 3. Apply color logic
    let color = "";


     if (selectedPriority === "High") {
        color = "#ff6b6b2b";
        textColor = "#FF6B6B"; // White text for better contrast on red
    } else if (selectedPriority === "Medium") {
        color = "#facc152b";
        textColor = "#FACC15"; // Darker text for better contrast on yellow
    } else if (selectedPriority === "Low") {
        color = "rgba(74, 222, 128, 0.17)";
        textColor = "#4ADE80"; // White text for better contrast on green
    }

     // 4. Update Styles
    // Background and text of the priority badge
    displayPriority.style.backgroundColor = color;
    displayPriority.style.color = textColor;
    displayPriority.style.padding = "0.125rem 0.5rem"; // Optional: adds some spacing
    displayPriority.style.borderRadius = "16px";

    // Border-left of the main card
    cardContainer.style.borderLeft = `4px solid ${textColor}`;


    //updating fields and time remaining logic
    const targetDate = new Date(inputDueDate.value);

    // 1. Existing updates
    displayTitle.textContent = inputTitle.value;
    displayDescription.textContent = inputDescription.value;
    displayPriority.textContent = inputPriority.value;
    displayStatus.textContent = inputStatus.value;
    displayDueDate.textContent = `Due ${targetDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

    // 2. Update Due Date
    const dateValue = new Date(inputDueDate.value);
    
    if (!isNaN(dateValue)) {
        
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        displayDueDate.textContent = `Due ${dateValue.toLocaleDateString('en-US', options)}`;
        
       
        displayDueDate.setAttribute('datetime', inputDueDate.value.split('T')[0]);

        // 3. Update Time Remaining text
        updateTimeRemaining(dateValue);
    }

    // 3. Clear any existing timer and start a new one
     if (countdownInterval) clearInterval(countdownInterval);
    
    // Run once immediately, then every 60 seconds
    updateLiveTime(targetDate);
    countdownInterval = setInterval(() => updateLiveTime(targetDate), 60000);

    // 1. Validation Check
    const titleVal = inputTitle.value.trim();
    const descVal = inputDescription.value.trim();
    const dateVal = inputDueDate.value;

    if (!titleVal || !descVal || !dateVal) {
        // Show the error message
        errorMessage.textContent = "Please fill in all fields (Title, Description, and Due Date).";
        errorMessage.style.display = "block";

        // Scroll to the top of the form so they see it
       // errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return; // STOP the function here so the card doesn't update
    }

    // 2. Clear error if validation passes
    errorMessage.style.display = "none";

    // 3. Continue with your existing Save logic
    displayTitle.textContent = titleVal;
    displayDescription.textContent = descVal;
    
    //status dot color change logic based on selected status
     // 1. Get the selected status
    const selectedStatus = inputStatus.value;
    displayStatus.textContent = selectedStatus;

    // 2. Status Dot Color Logic
    let dotColor = "";

    if (selectedStatus === "In Progress") {
        dotColor = "(#60A5FA"; 
        } else if (selectedStatus === "Done") {
        dotColor = "#22D3A6"; // Green
    } else {
        dotColor = "#9ca3af"; // Muted Grey (for Pending)
    }

    // 3. Apply the color to the dot
    statusDot.style.backgroundColor = dotColor;

    editForm.style.display = 'none';
    viewContent.style.display = 'block';

});

// Helper function to calculate "Due in X days"
function updateTimeRemaining(targetDate) {
    const now = new Date();
    const diffTime = targetDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
        displayTimeRemaining.textContent = "Overdue";
    } else if (diffDays === 0) {
        displayTimeRemaining.textContent = "Due today";
    } else {
        displayTimeRemaining.textContent = `Due in ${diffDays} days`;
    }
}

function updateLiveTime(targetDate) {
    const now = new Date();
    const diffInMs = targetDate - now;

    if (diffInMs <= 0) {
        displayTimeRemaining.textContent = "Overdue";
        displayTimeRemaining.style.color = "red";
        clearInterval(countdownInterval); // Stop timer if date passed
        return;
    }

    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffInMs / 1000 / 60) % 60);

    // Dynamic text based on how much time is left
    if (days > 0) {
        displayTimeRemaining.textContent = `Due in ${days}d ${hours}h`;
    } else if (hours > 0) {
        displayTimeRemaining.textContent = `Due in ${hours}h ${minutes}m`;
    } else {
        displayTimeRemaining.textContent = `Due in ${minutes}m`;
    }
}


