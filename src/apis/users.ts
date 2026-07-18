import axiosApi from ".";
import type { IUser, IUserCreate, IUsersFind, IUserUpdate } from "@/interfaces/users";
import type { IResponse } from "@/interfaces";

export const findUsersApi = async (params: IUsersFind) => {
  const response = await axiosApi.get("v1/users", { params });
  return response;
};

export const createUserApi = async (payload: IUserCreate) => {
  const response = await axiosApi.post("v1/users", payload);
  return response;
};

export const updateUserApi = async (id: number, payload: IUserUpdate) => {
  const response = await axiosApi.patch(`v1/users/${id}`, payload);
  return response as unknown as IResponse<IUser>;
};

export const deleteUserApi = async (id: number) => {
  const response = await axiosApi.delete(`v1/users/${id}`);
  return response;
};

export const uploadUserAvatarOrCoverApi = async (userId: number, type: 'AVATAR' | 'COVER_PHOTO', file: File) => {
  const formData = new FormData();
  formData.append("userId", userId.toString());
  formData.append("type", type);
  formData.append("file", file);

  const response = await axiosApi.post("v1/users/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response as unknown as IResponse<IUser>;
};
