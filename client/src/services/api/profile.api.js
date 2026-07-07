import api from '/src/services/axios.js';

export const getPublicProfile = async () => api.get('/profile');
export const updateProfileData = async (payload) => api.put('/profile', payload);
export const uploadProfileAvatar = async (formData) => api.patch('/profile/avatar', formData);
export const uploadProfileResume = async (formData) => api.patch('/profile/resume', formData);