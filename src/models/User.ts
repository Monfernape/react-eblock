export interface IUser {
    name: string;
    username: string;
    password: string;
    phoneNumber: string;
    address: string
}

export class User implements IUser {
    name = "";
    username = "";
    password = "";
    phoneNumber = "";
    address = ""
}