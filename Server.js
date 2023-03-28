import axios from 'axios';

const SERVER_API_URL = 'http://localhost:8080';

export default {
  getServers: () => axios.get(`${SERVER_API_URL}/servers`),
  getServer: (id) => axios.get(`${SERVER_API_URL}/servers/${id}`),
  createServer: (data) => axios.post(`${SERVER_API_URL}/servers`, data),
  updateServer: (id, data) => axios.put(`${SERVER_API_URL}/servers/${id}`, data),
  deleteServer: (id) => axios.delete(`${SERVER_API_URL}/servers/${id}`),
};
