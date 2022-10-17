import ActiveProcessScreen from "@/screens/ActiveProcessScreen.vue";
import ArchiveScreen from "@/screens/ArchiveScreen.vue";
import AvailableProcessScreen from "@/screens/AvailableProcessScreen.vue";
import FormScreen from "@/screens/FormScreen.vue";
import ProcessDetailScreen from "@/screens/ProcessDetailScreen.vue";
import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "ActiveProcessScreen",
        component: ActiveProcessScreen,
    },
    {
        path: "/available-processes",
        name: "AvailableProcessScreen",
        component: AvailableProcessScreen,
    },
    {
        path: "/archive",
        name: "ArchiveScreen",
        component: ArchiveScreen,
    },
    {
        path: "/process-detail/:id",
        name: "ProcessDetailScreen",
        component: ProcessDetailScreen,
        props: true,
    },
    {
        path: "process/action/form",
        name: "FormScreen",
        component: FormScreen,
        props: true,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
