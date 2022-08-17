import Vue from "vue";
import VueRouter from "vue-router";
import ActiveProcessScreen from "@/screens/ActiveProcessScreen.vue";
import AvailableProcessScreen from "@/screens/AvailableProcessScreen.vue";
import ArchiveScreen from "@/screens/ArchiveScreen.vue";
import ProcessDetailScreen from "@/screens/ProcessDetailScreen.vue";
import ProcessOverview from "@/views/ProcessOverview.vue";
import CurrentStep from "@/views/CurrentStep.vue";
import ProcessDetail from "@/views/ProcessDetail.vue";


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
        path: "/active-processes/:id",
        name: "ProcessDetailScreen",
        component: ProcessDetailScreen,
        children: [
            {
                path: "overview",
                component: ProcessOverview,
            },
            {
                path: "current-step",
                component: CurrentStep,
            },
            {
                path: "process-detail",
                component: ProcessDetail,
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
