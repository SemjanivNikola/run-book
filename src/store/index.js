import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
        drawerOpen: false,
    },
    mutations: {
        toggleDrawer (state) {
            state.drawerOpen = !state.drawerOpen;
        },
    },
    getters: {
        isDrawerOpen (state) {
            return state.drawerOpen;
        },
    },
    actions: {},
    modules: {},
});
