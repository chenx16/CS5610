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
