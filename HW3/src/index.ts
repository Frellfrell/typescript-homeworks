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