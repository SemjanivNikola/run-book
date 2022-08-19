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
.content {
    padding-top: 16px;
    padding-bottom: 16px;
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
span {
    display: block;
}
/***************************************/
/*           INFO WRAPPER              */
/***************************************/
.info-wrapper {
    padding: 24px;
    background-color: #ffffff;
    border-bottom: 1px solid #e0e0e0;
}

.info-wrapper h2.title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
}

@media (max-width: 756px) {
    #app {
        flex-direction: column;
        padding-top: 60px;
    }
    .info-wrapper {
        display: none;
    }
}
@media (min-width: 756px) {
    #app {
        display: flex;
        flex-direction: row;
    }
    .info-wrapper {
        display: block;
    }
    .content {
        padding-left: 24px;
        padding-right: 24px;
    }
}
</style>
