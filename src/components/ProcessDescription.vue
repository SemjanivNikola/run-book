<template>
    <div class="step-description-wrapper" :class="{'no-padding': noPadding}">
        <h3 v-if="title" class="mb">{{title}}</h3>
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    name: "ProcessDescription",
    props: {
        noPadding: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: null,
        },
        text: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.step-description-wrapper p {
    line-height: 1.3;
}
.mb {
    margin-bottom: 16px
}

@media (max-width: 756px) {
}
@media (min-width: 756px) {
}
</style>
