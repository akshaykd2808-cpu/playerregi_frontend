import axiosInstance from "../api/axiosInstance";
;
export const register = (data) => {
  return axiosInstance.post("/Auth/Register", data);
};

export const login = (data) => {
  return axiosInstance.post("/Auth/Login", data);
};

export const logout = () => {
  //localStorage.removeItem("token");
  return axiosInstance.post("/Auth/Logout")
};
