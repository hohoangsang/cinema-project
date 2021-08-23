import axiosClient from './axiosClient'

const bannerApi = {
    getAll: () => {
        const url = "/banner";
        return axiosClient.get(url);
    }
}

export default bannerApi