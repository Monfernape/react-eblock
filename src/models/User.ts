export interface IUser {
    _id: string;
    name: string;
    username: string;
    password: string;
    phoneNumber: string;
    address: string
}

export class User implements IUser {
    _id = "";
    name = "";
    username = "";
    password = "";
    phoneNumber = "";
    address = ""
}