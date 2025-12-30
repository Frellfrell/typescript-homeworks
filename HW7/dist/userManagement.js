"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUser = void 0;
class AdminUser {
    name;
    email;
    isSuperAdmin;
    constructor(name, email, isSuperAdmin = false) {
        this.name = name;
        this.email = email;
        this.isSuperAdmin = isSuperAdmin;
    }
    grantSuperAdmin() {
        this.isSuperAdmin = true;
    }
    revokeSuperAdmin() {
        this.isSuperAdmin = false;
    }
}
exports.AdminUser = AdminUser;
//# sourceMappingURL=userManagement.js.map