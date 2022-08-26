<template>
    <div>
        <div v-if="msg" class="error-wrapper">
            <icon name="warning" color="#e81e63" />
            <div class="inner-wrapper">
                <h4>Dogodila se greška</h4>
                <p>{{ msg }}</p>
            </div>
        </div>
        <slot v-else></slot>
    </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
    components: { Icon },
    name: "ErrorHandler",
    props: {
        msg: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped>
.error-wrapper,
.inner-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.error-wrapper {
    gap: 16px;
    padding-top: 32px;
}
.inner-wrapper {
    gap: 8px;
    text-align: center;
}
.inner-wrapper p {
    font-size: 14px;
}

@media (max-width: 756px) {
}
@media (min-width: 756px) {
}
</style>
