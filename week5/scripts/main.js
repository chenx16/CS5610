// Function to prompt the user for a radius
function getRadius() {
    let radius = prompt("Enter the radius of a circle:");
    radius = parseFloat(radius);
    
    if (isNaN(radius) || radius <= 0) {
        document.getElementById("result").textContent = "Please enter a valid positive number.";
        return null;
    }
    
    document.getElementById("radius").textContent = `Value provided by the user: ${radius}`;
    return radius;
}

// Function to calculate the area of a circle
function calculateArea(radius) {
    if (radius !== null) {
        let area = Math.PI * Math.pow(radius, 2);
        document.getElementById("result").textContent = `The area of the circle is: ${area.toFixed(2)}`;
    }
}

// Call the functions when the script loads
let radius = getRadius();
calculateArea(radius);

// Function to populate the unordered list with shopping items
function populateShoppingList(items) {
    let ul = document.querySelector(".shopping");

    if (!ul) {
        console.error("Shopping list element not found.");
        return;
    }

    // Clear existing items to prevent duplicates
    ul.innerHTML = "";

    // Add each item as a list element
    items.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

// Hardcoded array of shopping items
let shoppingItems = ["bread", "cheese", "green pepper"];

// Call the function to populate the list
populateShoppingList(shoppingItems);

// Function to change list marker type to square using classList.add()
function applySquareListClass() {
    let ul = document.querySelector(".shopping");
    if (ul) {
        ul.classList.add("squareList");
    }
}

// Function to change list marker type using setAttribute()
function applySquareListUsingAttribute() {
    let ul = document.querySelector(".shopping");
    if (ul) {
        ul.setAttribute("class", "shopping squareList");
    }
}

// Function to color list items containing "green"
function highlightGreenItems() {
    let listItems = document.querySelectorAll("li");
    
    listItems.forEach(li => {
        if (li.textContent.toLowerCase().includes("green")) {
            li.classList.add("green-text");
        }
    });
}

// Apply styles when the page loads
applySquareListClass();
highlightGreenItems();

// Function to toggle button text
function toggleButtonText() {
    let button = document.getElementById("updateImage");
    if (button) {
        button.textContent = button.textContent === "Click Me!" ? "clicked!" : "Click Me!";
    }
}

// Function to update image attributes (runs only once)
function updateImage() {
    let img = document.getElementById("shoppingCart");
    if (img) {
        img.src = "images/shoppingCart.png";  // Update the image path
        img.alt = "Shopping Cart";
        img.width = 200;
        img.height = 200;
    }

    // Remove the event listener after it runs once
    updateImageButton.removeEventListener("click", updateImage);
}

// Get the button element
let updateImageButton = document.getElementById("updateImage");

// Add event listener for toggling text
if (updateImageButton) {
    updateImageButton.addEventListener("click", toggleButtonText);
}

// Add event listener for updating the image (only runs once)
if (updateImageButton) {
    updateImageButton.addEventListener("click", updateImage, { once: true });
}

// Function to change background color based on button text
function changeBackgroundColor(event) {
    let color = event.target.textContent.toLowerCase(); // Get button text and convert to lowercase
    document.body.style.backgroundColor = color;
}

// Attach event listener to all color buttons
document.querySelectorAll("button").forEach(button => {
    if (["Red", "Blue", "Green"].includes(button.textContent)) {
        button.addEventListener("mouseover", changeBackgroundColor);
    }
});

// Event delegation for color buttons (mouseover event)
document.getElementById("colorButtons").addEventListener("mouseover", (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.style.backgroundColor = "green"; // Change button background to green
    }
});

// Event delegation for shopping list (click event to toggle strikethrough)
document.querySelector(".shopping").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        // Toggle strikethrough style using CSS instead of modifying innerHTML
        event.target.style.textDecoration = 
            event.target.style.textDecoration === "line-through" ? "none" : "line-through";
    }
});

// Function to toggle button text and store in localStorage
function toggleButtonText() {
    if (updateImageButton) {
        let newText = updateImageButton.textContent === "Click Me!" ? "clicked!" : "Click Me!";
        updateImageButton.textContent = newText;
        localStorage.setItem("updateImageButtonText", newText); // Save to localStorage
    }
}

// Function to restore button text from localStorage on page load
function restoreButtonText() {
    if (updateImageButton) {
        let savedText = localStorage.getItem("updateImageButtonText");
        if (savedText) {
            updateImageButton.textContent = savedText;
        }
    }
}

// Restore button text when the page loads
document.addEventListener("DOMContentLoaded", restoreButtonText);