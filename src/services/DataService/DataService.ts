import { User } from "../../models";
import axios from "./axios";
export class DataService {
  login = async (username: string, password: string): Promise<User | undefined> => {
    try {
      const response = await axios.post("auth/login", { username, password });
      return response.data as User
    } catch (error) {
        this.handleError(error)
    }
  };

  signup = async (user: User): Promise<string | undefined> => {
    try {
      const response = await axios.post("auth/signup", user);
      return response.data.message as string;
    } catch (error) {
        this.handleError(error)
    }
  };

  handleError = (error: any) => {
    throw error.response.data.errors[0].message;
  };
}
