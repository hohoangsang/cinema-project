import axiosClient from "./axiosClient";

const userApi = {
    getAll: () => {
        const url = "/users";
        return axiosClient.get(url);
    },

    getUserByEmail: (params) => {
        const url = `/users?email=${params}`;
        return axiosClient.get(url)
    },

    getUserById: (params) => {
        const url = `/users?id=${params}`;
        return axiosClient.get(url)
    },

    updateUser: (data) => {
        const url = `/user?id=${data.id}`;
        return axiosClient.patch(url, data)
    }
}

export default userApi;