import { User, IUser } from './User';

export class Fix {
    id: string = "";
    userId: IUser = new User();
    number: string = "";
    color: string = "#ffffff";
    problemDetail: string = "";
    position: { lat: number, lng: number } = { lat: 0, lng: 0 }
}