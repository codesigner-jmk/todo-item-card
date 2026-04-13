function checkStrike() {
  const checkbox = document.getElementById("test-todo-complete-toggle");
  const text = document.getElementById("test-todo-title");

  if (checkbox.checked) {
    text.style.textDecoration = "line-through";
  } else {
    text.style.textDecoration = "none";
  }
}

function changeStatus() {
  var checkBox = document.getElementById("test-todo-complete-toggle");
  var text = document.getElementById("status");

  // Check if the checkbox is checked
  if (checkBox.checked == true) {
    text.innerHTML = "Done";
  } else {
    text.innerHTML = "In Progress";
  }
}

function changeColor(checkbox) {
    const parent = document.getElementById("status-dot");
    // Change background color based on checked state
    if (checkbox.checked) {
        parent.style.backgroundColor = "#22D3A6";
    } else {
        parent.style.backgroundColor = "#60A5FA";
    }
}

function logMessage() {
  console.log("Edit Clicked");
}

 function deleteFunction() {
    alert("Delete Clicked");
  }

