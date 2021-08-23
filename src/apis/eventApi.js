import axiosClient from './axiosClient'

const eventApi = {
    getAll: () => {
        const url = "/event";
        return axiosClient.get(url);
    },

    getDetail: (slug) => {
        const url = `/event/?_id=${slug}`;
        return axiosClient.get(url)
    }
}

export default eventApi