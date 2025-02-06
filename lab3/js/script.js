const prices = {
    flavors: {
        original: 2.5,
        mango: 3.0,
        strawberry: 3.5
    },
    sizes: {
        small: 1.0,
        medium: 1.5,
        large: 2.0
    },
    toppings: {
        boba: 0.5,
        jelly: 0.75,
        pudding: 1.0
    }
};

function calculateTotalPrice(flavor, size, toppings) {
    let basePrice = prices.flavors[flavor];
    let toppingsPrice = toppings.reduce((total, topping) => total + prices.toppings[topping], 0);
    return prices.sizes[size] * (basePrice + toppingsPrice);
}

function displayOrderSummary(order) {
    let toppingsSummary = order.toppings.length > 0 ? order.toppings.join(" ") : "no toppings";
    document.getElementById("orderSummary").innerText = 
        `You have ordered a ${order.size} ${order.flavor} boba with these toppings: ${toppingsSummary}. ` +
        `Total Price: $${order.finalPrice.toFixed(2)}`;
}


function getSelectedToppings() {
    let toppingsSelect = document.getElementById("toppingsSelect"); // Corrected ID
    let selectedToppings = [];

    // Loop through options and collect selected values
    for (let option of toppingsSelect.options) {
        if (option.selected && option.value !== "") {
            selectedToppings.push(option.value);
        }
    }
    return selectedToppings;
}

function placeOrder() {
    if (!validateSelections()) return;

    let flavor = document.getElementById("flavorSelect").value;
    let size = document.getElementById("sizeSelect").value;
    let toppings = getSelectedToppings(); 

    let finalPrice = calculateTotalPrice(flavor, size, toppings);
    let order = { flavor, size, toppings, finalPrice };
    displayOrderSummary(order);
}


function validateSelections() {
    let flavor = document.getElementById("flavorSelect").value;
    let size = document.getElementById("sizeSelect").value;

    if (!flavor || !size) {
        alert("Please select both a flavor and a size before placing your order.");
        return false;
    }
    return true;
}

document.getElementById("placeOrderButton").addEventListener("click", placeOrder);

// Test Case:
function testOrder() {
    document.getElementById("flavorSelect").value = "original";
    document.getElementById("sizeSelect").value = "medium";
    document.getElementById("toppingsSelect").value = ["boba", "jelly"];
    placeOrder(); // Now correctly calls the updated function
}