import api from "../axios";

export const getNavigation = async () => {
  const response = await api.get("/navigation");
  return response.data;
};