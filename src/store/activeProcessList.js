import axios from "axios";

export default {
    state: {
        list: [],
        processDetail: null,
    },
    mutations: {
        setList (state, payload) {
            state.list = payload;
        },
        setProcessDetail (state, payload) {
            state.processDetail = payload;
        },
    },
    getters: {
        getPreview: (state) => (id) => {
            return state.list.find((item) => item.id === id);
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
        readProcessList ({ commit }) {
            return axios.get("/process").then((res) => {

                commit("setList", res.data);
                return res.data;
            }).
                catch((err) => {
                    throw err.message;
                });
        },
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
