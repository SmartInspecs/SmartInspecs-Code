import { UserInfo } from "firebase/auth";

export interface iDefaultProviderProps {
    children: React.ReactNode;
  }

export interface iUserContext{
  createUser: any | null,
  loginUser: void | null, 
  logoutUser: Promise<void>, 
  user: UserInfo[] | null
}