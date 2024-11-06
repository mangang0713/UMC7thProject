import axios from "axios";

const mainAPI = axios.create({
  baseURL: import.meta.env.VITE_MAIN_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerAPI = async (userData) => {
  try {
    const response = await mainAPI.post("auth/register", userData);
    return response.data;
  } catch (error) {
    console.error("Register 처리 중 에러", error);
    throw error;
  }
};

export const loginAPI = async (userData) => {
  try {
    const response = await mainAPI.post("auth/login", userData);
    return response.data;
  } catch (error) {
    console.error("Login 처리 중 에러", error);
    throw error;
  }
};
