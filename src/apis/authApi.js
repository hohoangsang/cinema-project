import axiosClient from './axiosClient';

const authApi = {
    register: (data) => {
        const url = '/users';
        return axiosClient.post(url, data)
    }
}   

export default authApi;