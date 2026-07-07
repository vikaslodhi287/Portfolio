import api from '/src/services/axios.js';

export const getAllBlogs = async (params = {}) => api.get('/blogs', { params });
export const getBlogBySlug = async (slug) => api.get(`/blogs/slug/${slug}`);
export const createBlogArticle = async (formData) => api.post('/blogs', formData);
export const updateBlogArticle = async (id, formData) => api.put(`/blogs/${id}`, formData);
export const deleteBlogArticle = async (id) => api.delete(`/blogs/${id}`);