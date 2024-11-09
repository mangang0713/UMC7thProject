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

export const userAPI = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("AccessToken이 없습니다.");
  }

  try {
    const response = await mainAPI.get("user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("User 정보 불러오기 중 에러", error);
    throw error;
  }
};
