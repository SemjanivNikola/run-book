<template>
    <div class="step-description-wrapper" :class="{'no-padding': noPadding}">
        <h3 class="mb">Važni datumi</h3>
        <p>Za studente koji su upisali Stručnu praksu na preddiplomskom ili diplomskom studiju:</p>
        <ol>
            <li>Najraniji datum početka izvođenja stručne prakse - <b>15. listopad 2022.</b></li>
            <li>Najkasniji datum završetka - <b>15. rujna 2023.</b></li>
        </ol>
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
ol {
    padding: 16px 32px;
}

@media (max-width: 756px) {
}
@media (min-width: 756px) {
}
</style>
