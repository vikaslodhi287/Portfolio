import api from '/src/services/axios.js';

export const getEmploymentLogs = async () => api.get('/experience');
export const createEmploymentLog = async (payload) => api.post('/experience', payload);
export const updateEmploymentLog = async (id, payload) => api.put(`/experience/${id}`, payload);
export const deleteEmploymentLog = async (id) => api.delete(`/experience/${id}`);