import api from "../axios";

/* =========================================
   GET PROFILE
========================================= */

export async function getProfile() {
  const response = await api.get("/profile");

  return response.data.data;
}

/* =========================================
   UPDATE PROFILE
========================================= */

export async function updateProfile(formData) {
  const response = await api.put("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}