import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import Icon from "./components/Icon.vue";
import environmen from "./environment";
import router from "./router";
import store from "./store";

axios.defaults.baseURL = environmen.MANAGER_BASE_URL;

Vue.component("Icon", Icon);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
