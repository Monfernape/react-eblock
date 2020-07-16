import { User } from "../../models"

export abstract class DataService {
    login?: (username: string, password: string) => Promise<User>
    signup?: (user: User) => Promise<void>
}