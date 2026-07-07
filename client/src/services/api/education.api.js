import api from '/src/services/axios.js';

export const getAcademicRecords = async () => api.get('/education');
export const createAcademicRecord = async (payload) => api.post('/education', payload);
export const updateAcademicRecord = async (id, payload) => api.put(`/education/${id}`, payload);
export const deleteAcademicRecord = async (id) => api.delete(`/education/${id}`);