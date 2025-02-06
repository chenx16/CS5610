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
