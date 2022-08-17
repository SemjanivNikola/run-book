<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
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
