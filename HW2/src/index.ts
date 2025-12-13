//Типизация функции с несколькими параметрами
function calculateTotal(price: number, quantity: number, discount: number = 0): number {
    return price * quantity * (1 - discount);
}

//Пример использования функции
console.log(calculateTotal(100, 2)); // 200
console.log(calculateTotal(100, 2, 0.1)); // 180


//Union типы
let id: string | number;

function displayId(id: string | number): void {
    if (typeof id === "string") {
        console.log("ID:", id.toUpperCase());
    } else {
        console.log("ID:", id * 10);
    }
}
id = "abc123";
displayId(id); // ID: ABC123
