import api from '/src/services/axios.js';

export const getGlobalSettings = async () => api.get('/settings');
export const updateGlobalSettings = async (payload) => api.put('/settings', payload);