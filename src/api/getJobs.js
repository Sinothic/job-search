import axios from "axios";

export const getJobs = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get(`${baseUrl}/jobs`);
  return response.data;
};
