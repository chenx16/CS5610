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
    console.log(`You have ordered a ${order.size} ${order.flavor} boba with these toppings: ${order.toppings.join(", ")}`);
    console.log(`Total Price: $${order.finalPrice.toFixed(2)}`);
}

function placeOrder(flavor, size, toppings) {
    if (size === "") {
        console.error("Please select a valid size.");
        return;
    }

    // Filter out empty values (to remove "--Please choose toppings--")
    toppings = toppings.filter(topping => topping !== "");

    let finalPrice = calculateTotalPrice(flavor, size, toppings);
    let order = { flavor, size, toppings, finalPrice };
    displayOrderSummary(order);
}


// Test Case:
function testOrder() {
    let testFlavor = "original";
    let testSize = "medium";
    let testToppings = ["boba", "jelly"];
    placeOrder(testFlavor, testSize, testToppings);
}
