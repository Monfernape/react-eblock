import { User } from "../../models"
import axios from "./axios"
export class DataService {
    login = async (username: string, password: string) => {
        const response = await axios.post("auth/login", {username, password})
        console.log({response})
    }

    signup = async (user: User) => {
        delete user._id
        const response = await axios.post("auth/signup", user)
        console.log({response})
    }
}