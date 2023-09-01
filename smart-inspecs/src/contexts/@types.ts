import { UserInfo } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

export interface iDefaultProviderProps {
    children: React.ReactNode;
  }

export interface iUserContext{
  createUser: any | null,
  loginUser: void | null, 
  logoutUser: Promise<void>, 
  user: UserInfo[] | null
  userDb: DocumentData | null
}