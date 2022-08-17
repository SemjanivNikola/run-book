<template>
    <div id="app">
        <side-drawer />
        <router-view />
    </div>
</template>

<script>
import SideDrawer from "./views/SideDrawer.vue";
export default {
    name: "App",
    components: { SideDrawer },
};
</script>


        SideDrawer<style>
#app {
    position: relative;
    height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.icon-placeholder {
    width: 24px;
    height: 24px;
}
.spacer-md {
    height: 16px;
    width: 16px;
    min-width: 16px;
    min-height: 16px;
}
</style>
