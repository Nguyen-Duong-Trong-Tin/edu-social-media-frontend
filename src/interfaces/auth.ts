import type { IAccount } from "./accounts";
import type { IUser } from "./users";

export interface IAuthLogin {
  userName: string;
  password: string;
}

export interface IAuthLoginResponse {
  accessToken: string;
  refreshToken: string;
  account: IAccount;
}

export interface IAuthLoginUser {
  email: string;
  password: string;
}

export interface IAuthLoginUserResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface IAuthRegister {
  fullName: string;
  email: string;
  password: string;
  bio: string;
}

export interface IAuthRegisterResponse {
  id: number;
  fullName: string;
  slug: string;
  email: string;
  avatar: string;
  coverPhoto: string;
  bio: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IRefreshToken {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthRefreshTokenResponse {
  accessToken: string;
}
