//Объединение и пересечение типов
type Admin = {
    name: string;
    permissions: string[];
};

type User = {
    name: string;
    email: string;
};

// Пересечение типов
type AdminUser = Admin & User;

const adminUser: AdminUser = {
    name: "Alice",
    permissions: ["read", "write"],
    email: "alice@example.com"
};

console.log(adminUser);

//Вложенные объекты и опциональные поля
type Engine = {
    type: string;
    horsepower: number;
};

type Car = {
    make: string;
    model: string;
    engine: Engine;
    year?: number; // опциональное поле
};

const myCar: Car = {
    make: "Toyota",
    model: "Camry",
    engine: {
        type: "V6",
        horsepower: 301
    },
    year: 2022
};

function printCarInfo(car: Car) {
    console.log(`${car.make} ${car.model} (${car.year ?? "Year unknown"}), Engine: ${car.engine.type}, HP: ${car.engine.horsepower}`);
}

printCarInfo(myCar);

//Интерфейс для функции с объектом
interface Product {
    name: string;
    price: number;
}
interface CalculateDiscount {
    (product: Product, discount: number): number;
}

const calculateDiscount: CalculateDiscount = (product, discount) => {
    return product.price - product.price * (discount / 100);
};

const product: Product = { name: "Laptop", price: 1000 };
console.log(calculateDiscount(product, 10)); // 900

//массив объектов и функции
interface Employee {
    name: string;
    salary: number;
}
const employees: Employee[] = [
    { name: "John", salary: 50000 },
    { name: "Jane", salary: 60000 },
    { name: "Doe", salary: 55000 }
];
function getTotalSalary(employees: Employee[]): number [] {
    return employees.map(emp => emp.salary);
}