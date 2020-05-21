export interface UserLogin {
    Username: string;
    Password: string;
}

export interface IUser {
    Id?: string;
    Name: string;
    Username: string;
    Password: string;
    PhoneNumber: string;
    Address: string;
}

export class User implements IUser {
    Name = ""
    Username = ""
    Password = ""
    PhoneNumber = ""
    Address = ""
}