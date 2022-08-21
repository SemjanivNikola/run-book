<template>
    <div v-show="isActive">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "TabBarItem",
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data () {
        return {
            isActive: false,
        };
    },
};
</script>

<style scoped>
@media (max-width: 756px) {
}
@media (min-width: 756px) {
}
</style>
