import { createContext } from "react";
import { UserProps } from "../types/User";
import { defaultUser } from "../constants/defaultUser";
export const UserContext = createContext<UserProps>({
  user: defaultUser,
  setUser: () => {},
});
