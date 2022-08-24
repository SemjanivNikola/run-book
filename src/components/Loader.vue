<template>
    <div>
        <div v-if="isActive" class="loader">
            Loading...
        </div>
        <slot v-else></slot>
    </div>
</template>

<script>
export default {
    name: "Loader",
    props: {
        isActive: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped>
@media (max-width: 756px) {
}
@media (min-width: 756px) {
}
</style>
