export class AdminUser {
  constructor(
    public name: string,
    public email: string,
    public isSuperAdmin: boolean = false
  ) {}