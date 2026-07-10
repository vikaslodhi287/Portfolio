import axiosInstance from "../axios";

export const getAllEducation = async () => {
  const response = await axiosInstance.get("/education");

  return response.data;
};