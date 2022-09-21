import axios from "axios";

export default {
    state: {
        list: [],
        recordPreview: null,
        processDetail: null,
    },
    mutations: {
        setPreview (state, payload) {
            state.recordPreview = payload;
        },
        setProcessDetail (state, payload) {
            state.processDetail = payload;
        },
    },
    getters: {
        getPreview (state) {
            if (state.recordPreview) {
                return state.recordPreview;
            }
            return { title: "-", manager: "-", progress: "0" };
        },
        getAdditionalInfo (state) {
            const { description, linkList, stepList } = state.processDetail;
            return { description, linkList, stepList };
        },
        getDetails (state) {
            return state.processDetail;
        },
    },
    actions: {
        readProcessById ({ commit }, payload) {
            return axios.get(`/process/${payload}`).then((res) => {

                commit("setProcessDetail", res.data);
                return res.data;
            }).
                catch((err) => {
                    throw err.message;
                });
        },
    },
};
