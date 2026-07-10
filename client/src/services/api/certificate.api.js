import axiosInstance from "../axios";

export const getAllCertificates = async () => {
  const response = await axiosInstance.get("/certificate");

  return response.data;
};