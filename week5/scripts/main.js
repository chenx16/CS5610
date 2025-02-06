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
