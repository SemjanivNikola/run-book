import axios from "axios";

export default {
    state: {
        list: [],
        recordPreview: null,
        recordAdditionalInfo: null,
    },
    mutations: {
        setPreview (state, payload) {
            state.recordPreview = payload;
        },
        setAdditionalinfo (state, payload) {
            state.recordAdditionalInfo = payload;
        },
    },
    getters: {
        getPreview (state) {
            return state.recordPreview;
        },
    },
    actions: {
        async readProcessById ({ commit }, payload) {
            await axios.get(`/process/active/?id=${payload}`).then((res) => {
                console.warn("RES >> ", res);

                commit("setAdditionalinfo", res.data);
            }).
                catch((err) => {
                    throw err.message;
                });
        },
    },
};
