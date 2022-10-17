import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import Icon from "./components/Icon.vue";
import environmen from "./environment";
import router from "./router";
import store from "./store";
import { VueFormBuilderPlugin } from "v-form-builder";
// import "v-form-builder/dist/v-form-builder.css"; // Dodaje CSS vašem projektu

axios.defaults.baseURL = environmen.MANAGER_BASE_URL;

Vue.use(VueFormBuilderPlugin);
Vue.component("Icon", Icon);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
    mounted () {
        document.title = "RunBook";
    },
}).$mount("#app");
