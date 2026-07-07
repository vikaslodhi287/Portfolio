import api from '/src/services/axios.js';

export const getAllProjects = async () => api.get('/projects');
export const createProject = async (formData) => api.post('/projects', formData);
export const updateProject = async (id, formData) => api.put(`/projects/${id}`, formData);
export const deleteProject = async (id) => api.delete(`/projects/${id}`);