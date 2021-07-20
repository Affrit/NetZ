import axios from "axios"

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "7a629a07-0dc7-4ccf-93da-71b5ec4ded63"
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
   },

   followUser(userId) {
    return axiosInstance.post(`follow/${userId}`, {})
      .then(response => response.data)
   },

   unfollowUser(userId) {
    return axiosInstance.delete(`follow/${userId}`)
      .then(response => response.data)
   },
}

export const authAPI = {
  authMe() {
    return axiosInstance.get(`auth/me`)
      .then(response => response.data)
   },

  login(email, password, rememberMe = false) {
    return axiosInstance.post(`auth/login`, { email, password, rememberMe })
    .then(response => response.data)
  },

  logout() {
    return axiosInstance.delete(`auth/login`)
    .then(response => response.data)
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return axiosInstance.get(`profile/${userId}`)
      .then(response => response.data)
   },

  getUserStatus(userId) {
    return axiosInstance.get(`profile/status/${userId}`)
    .then(response => response.data)
  },

  updateUserStatus(status) {
    return axiosInstance.put(`profile/status/`, { status: status })
  },
}