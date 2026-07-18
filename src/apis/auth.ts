import type { IAuthLogin, IAuthLoginResponse, IAuthLoginUser, IAuthLoginUserResponse, IAuthRefreshTokenResponse, IAuthRegister, IAuthRegisterResponse, IRefreshToken } from "@/interfaces/auth";
import type { IUser } from "@/interfaces/users";

import axiosApi from ".";
import type { IResponse } from "@/interfaces";

export const loginAuthApi = async (payload: IAuthLogin) => {
  const response = await axiosApi.post("v1/auth/login", payload);
  return response as unknown as IResponse<IAuthLoginResponse>;
};

export const loginUserAuthApi = async (payload: IAuthLoginUser) => {
  const response = await axiosApi.post("v1/auth/user/login", payload);
  return response as unknown as IResponse<IAuthLoginUserResponse>;
}

export const meUserAuthApi = async () => {
  const response = await axiosApi.post("v1/auth/user/me");
  return response as unknown as IResponse<IUser>;
}

export const registerAuthApi = async (payload: IAuthRegister) => {
  const response = await axiosApi.post("v1/auth/register", payload);
  return response as unknown as IResponse<IAuthRegisterResponse>;
}

export const refreshTokenAuthApi = async (payload: IRefreshToken) => {
  const response = await axiosApi.post("v1/auth/refresh-token", payload);
  return response as unknown as IResponse<IAuthRefreshTokenResponse>;
}

export const meAuthApi = async () => {
  const response = await axiosApi.post("v1/auth/me");
  return response;
}

export const verifyTokenAuthApi = async () => {
  const response = await axiosApi.post("/v1/auth/verify-token");
  return response;
}
