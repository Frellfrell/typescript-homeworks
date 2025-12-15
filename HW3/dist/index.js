"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adminUser = {
    name: "Alice",
    permissions: ["read", "write"],
    email: "alice@example.com"
};
console.log(adminUser);
const myCar = {
    make: "Toyota",
    model: "Camry",
    engine: {
        type: "V6",
        horsepower: 301
    },
    year: 2022
};
function printCarInfo(car) {
    console.log(`${car.make} ${car.model} (${car.year ?? "Year unknown"}), Engine: ${car.engine.type}, HP: ${car.engine.horsepower}`);
}
printCarInfo(myCar);
const calculateDiscount = (product, discount) => {
    return product.price - product.price * (discount / 100);
};
const product = { name: "Laptop", price: 1000 };
console.log(calculateDiscount(product, 10)); // 900
const employees = [
    { name: "John", salary: 50000 },
    { name: "Jane", salary: 60000 },
    { name: "Doe", salary: 55000 }
];
function getTotalSalary(employees) {
    return employees.map(emp => emp.salary);
}
console.log(getTotalSalary(employees)); // [50000, 60000, 55000]
const student = {
    firstName: "Alice",
    lastName: "Johnson",
    grade: 90
};
function printStudentInfo(student) {
    console.log(`${student.firstName} ${student.lastName}, Grade: ${student.grade}`);
}
printStudentInfo(student);
const concatenate = (str1, str2) => str1 + str2;
console.log(concatenate("Hello, ", "World!")); // "Hello, World!"  
//# sourceMappingURL=index.js.map