import api from '/src/services/axios.js';

export const sendContactMessage = async (payload) => api.post('/contact', payload);
export const fetchAdminMessageLogs = async () => api.get('/contact');
export const toggleMessageReadStatus = async (id) => api.put(`/contact/${id}/read`);
export const deleteMessageLog = async (id) => api.delete(`/contact/${id}`);