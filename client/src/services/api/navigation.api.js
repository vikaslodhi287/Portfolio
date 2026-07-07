import api from '/src/services/axios.js';

/**
 * Fetch navigation menu configurations.
 * @param {boolean} isAdmin - If true, fetches all items including hidden entries.
 */
export const getNavigationItems = async (isAdmin = false) => {
  return api.get(`/navigation`, {
    params: { isAdmin }
  });
};

export const createNavigationItem = async (payload) => {
  return api.post(`/navigation`, payload);
};

export const updateNavigationItem = async (id, payload) => {
  return api.put(`/navigation/${id}`, payload);
};

export const deleteNavigationItem = async (id) => {
  return api.delete(`/navigation/${id}`);
};