import axios from "axios";

export default {
    state: {
        list: [],
        detail: null,
    },
    mutations: {
        setList (state, payload) {
            state.list = payload;
        },
        setDetail (state, payload) {
            state.detail = payload;
        },
        setDetailAction (state, payload) {
            const activeStep = state.detail.currentStep;
            state.detail.stepList[activeStep[0]][activeStep[1]].action = payload;
        },
    },
    getters: {
        getPreview: (state) => (id) => {
            return state.list.find((item) => item.id === id);
        },
        getDetail (state) {
            return state.detail;
        },

        /**
         * @desc this is used to present only active step within it's own group along with next group one with all
         * steps inside it
         * @returns Array<[Step[], Step[]]>
         */
        getStepListForActiveStep (state) {
            const stepList = [[], []];
            const activeStep = state.detail.currentStep;

            stepList[0].push(state.detail.stepList[activeStep[0]][activeStep[1]]);
            stepList[1] = state.detail.stepList[state.detail.currentStep[0] + 1];
            return stepList;
        },
    },
    actions: {
        readProcessList ({ commit }, payload) {
            return axios.get(`/process?status=${payload}`).then((res) => {

                commit("setList", res.data);
                return res.data;
            }).
                catch((err) => {
                    throw err.message;
                });
        },
        readProcessById ({ commit }, payload) {
            return axios.get(`/process/${payload}`).then((res) => {

                commit("setDetail", res.data);
                return res.data;
            }).
                catch((err) => {
                    throw err.message;
                });
        },
        readActionById (_c, payload) {
            return axios.get(`/process/action/${payload}`).
                then((res) => {
                    return res.data;
                }).
                catch((err) => {
                    throw err.message;
                });
        },
    },
};
