<template>
    <div id="app">
        <side-drawer />
        <section id="app-content">
            <router-view />
        </section>
    </div>
</template>

<script>
import SideDrawer from "./views/SideDrawer.vue";
export default {
    name: "App",
    components: { SideDrawer },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        sans-serif;
    color: #000;
}
#app {
    position: relative;
    height: 100vh;
    max-width: 100vw;
    overflow: hidden;
}
#app-content {
    height: 100%;
    width: 100%;
    background-color: #f9f9f9;
}
#main-container {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
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
p {
    text-align: justify;
}
@media (max-width: 756px) {
    #app {
        flex-direction: column;
        padding-top: 60px;
    }
}
@media (min-width: 756px) {
    #app {
        display: flex;
        flex-direction: row;
    }
}
</style>
