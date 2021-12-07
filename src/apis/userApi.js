import axiosClient from "./axiosClient";

const userApi = {
    getAll: () => {
        const url = "/users";
        return axiosClient.get(url);
    },

    getList: (params) => {
        const url = '/users';
        return axiosClient.get(url, { params })
    },

    getUserByEmail: (params) => {
        const url = `/users?email=${params}`;
        return axiosClient.get(url)
    },

    getUserById: (params) => {
        const url = `/users/${params}`;
        return axiosClient.get(url)
    },

    addUser: (data) => {
      const url = `/users`;
      return axiosClient.post(url,data)  
    },

    updateUser: (data) => {
        const url = `/users/${data.id}`;
        return axiosClient.patch(url, data)
    },

    removeUser: (id) => {
        const url = `/users/${id}`;
        return axiosClient.delete(url);
    }
}

export default userApi;