import axiosInstance from "../axios";

export const getAllExperiences = async () => {
  const response = await axiosInstance.get("/experience");

  return response.data;
};