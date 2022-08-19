import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import Icon from "./components/Icon.vue";
import router from "./router";
import store from "./store";

axios.defaults.baseURL = "http://localhost:3000";

Vue.component("Icon", Icon);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
