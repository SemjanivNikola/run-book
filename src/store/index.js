import Vue from "vue";
import Vuex from "vuex";
import processStore from "./processStore";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
        drawerOpen: false,
    },
    mutations: {
        toggleDrawer (state) {
            state.drawerOpen = !state.drawerOpen;
            localStorage.drawerState = state.drawerOpen;
        },
        setDrawerInitState (state, stateValue) {
            state.drawerOpen = stateValue;
        },
    },
    getters: {
        isDrawerOpen (state) {
            return state.drawerOpen;
        },
    },
    actions: {},
    modules: {
        processStore: {
            namespaced: true,
            ...processStore,
        },
    },
});
