"use strict";
//Типизация функции с несколькими параметрами
function calculateTotal(price, quantity, discount = 0) {
    return price * quantity * (1 - discount);
}
//Пример использования функции
console.log(calculateTotal(100, 2)); // 200
console.log(calculateTotal(100, 2, 0.1)); // 180
//Union типы
let id;
function displayId(id) {
    if (typeof id === "string") {
        console.log("ID:", id.toUpperCase());
    }
    else {
        console.log("ID:", id * 10);
    }
}
id = "abc123";
displayId(id); // ID: ABC123
const orders = [
    { orderId: "A1", amount: 100, status: "pending" },
    { orderId: "B2", amount: 250, status: "shipped" },
    { orderId: "C3", amount: 300, status: "delivered" },
    { orderId: "D4", amount: 120, status: "pending" }
];
function filterOrdersByStatus(orders, status) {
    return orders.filter(order => order.status === status);
}
console.log(filterOrdersByStatus(orders, "pending"));
// [name, price, changeInStock]
function updateStock(inventory, productInfo) {
    const [name, , change] = productInfo;
    if (inventory[name] !== undefined) {
        inventory[name] += change;
    }
    else {
        inventory[name] = change;
    }
    return inventory;
}
let inventory = {
    "Laptop": 10,
    "Phone": 25
};
const productInfo = ["Laptop", 999.99, -2];
console.log(updateStock(inventory, productInfo));
//  { Laptop: 8, Phone: 25 }
