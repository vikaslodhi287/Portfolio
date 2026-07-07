import api from '/src/services/axios.js';

export const loginAdmin = async (credentials) => api.post('/auth/login', credentials);
export const fetchCurrentAdminSession = async () => api.get('/auth/me');
export const updateAdminCredentials = async (payload) => api.put('/auth/update-credentials', payload);