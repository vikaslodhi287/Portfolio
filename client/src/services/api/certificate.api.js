import api from '/src/services/axios.js';

export const getCertificationsGrid = async () => api.get('/certificates');
export const registerCertification = async (formData) => api.post('/certificates', formData);
export const updateCertification = async (id, formData) => api.put(`/certificates/${id}`, formData);
export const deleteCertification = async (id) => api.delete(`/certificates/${id}`);