import { IResponse } from '../type';

export interface LoginReq {
  account: string;
  password: string;
}

export interface LoginResItem {
  is_logged_in: boolean;
  token: string;
  user: User;
  [property: string]: any;
}

export interface User {
  avatar: null;
  created_at: string;
  email: null;
  has_brain_wave: boolean;
  id: number;
  updated_at: string;
  username: string;
  [property: string]: any;
}

export type LoginRes = IResponse<LoginResItem>;

export interface RegisterReq {
  account: string;
  password: string;
}

export type RegisterRes = IResponse<LoginResItem>;
