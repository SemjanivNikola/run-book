import ActiveListScreen from "@/screens/ActiveListScreen.vue";
import ArchiveListScreen from "@/screens/ArchiveListScreen.vue";
import AvailableListScreen from "@/screens/AvailableListScreen.vue";
import FormScreen from "@/screens/FormScreen.vue";
import ProcessDetailScreen from "@/screens/ProcessDetailScreen.vue";
import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "ActiveListScreen",
        component: ActiveListScreen,
    },
    {
        path: "/available-processes",
        name: "AvailableListScreen",
        component: AvailableListScreen,
    },
    {
        path: "/archive",
        name: "ArchiveListScreen",
        component: ArchiveListScreen,
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
