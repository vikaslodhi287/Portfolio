import axiosInstance from "../axios";

export const getProfile = async () => {
  const response = await axiosInstance.get("/profile");

  return response.data.data;
};