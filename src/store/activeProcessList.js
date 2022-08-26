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
            return state.recordPreview;
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
        async readProcessById ({ commit }, payload) {
            await axios.get(`/process/active/?id=${payload}`).then((res) => {
                console.warn("RES >> ", res);

                commit("setProcessDetail", res.data);
                return res.data;
            }).
                catch((err) => {
                    throw err.message;
                });
        },
    },
};
