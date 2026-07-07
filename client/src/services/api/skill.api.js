import api from '/src/services/axios.js';

export const getSkillsMatrix = async () => api.get('/skills');
export const addSkillRecord = async (payload) => api.post('/skills', payload);
export const updateSkillRecord = async (id, payload) => api.put(`/skills/${id}`, payload);
export const deleteSkillRecord = async (id) => api.delete(`/skills/${id}`);