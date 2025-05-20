import { LoginResItem, User } from "../../services/Auth/type";

export type IAuthState = Partial<LoginResItem>;

export type AuthAction =
  | { type: 'LOGIN', payload: IAuthState }
  | { type: 'LOGOUT' }
  | { type: 'SET_USER', payload: User };
