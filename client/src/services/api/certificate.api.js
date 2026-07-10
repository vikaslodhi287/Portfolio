import axiosInstance from "../axios";

export const getAllCertificates = async () => {
  const response = await axiosInstance.get("/certificates");

  return response.data;
};