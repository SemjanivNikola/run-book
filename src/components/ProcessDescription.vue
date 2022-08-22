<template>
    <div class="step-description-wrapper" :class="{'no-padding': noPadding}">
        <p>
            Praksu možeš prijaviti na dva načina. Ukoliko si se dogovorio/la s
            firmom gdje bi odrađivao/la praksu samo ju je potrebno dodati u
            preferencije s tablice. Naravno prije toga oni trebaju ispuniti
            prijavnicu za održavanje prakse ukoliko nisu. Nakon toga ideš na
            sljedeće korake. Ukoliko to nije slučaj, možeš pogledati izbor firmi
            dolje u među poveznicama te odabrati ono što ti se čini
            najzanimljivje ili najlakše - nećemo nikome reći ;).
        </p>
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

@media (max-width: 756px) {
}
@media (min-width: 756px) {
}
</style>
