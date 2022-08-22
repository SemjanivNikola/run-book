<template>
    <div class="step-wrapper">
        <div class="step-item">
            <icon name="step-done" :size="22" color="rgb(0, 185, 0)" />
            <div class="spacer-md"></div>
            <div class="step-info">
                <h5>Potvrda o alokaciji</h5>
                <p>
                    <b><i>Alokacija na praksu</i></b> - kada budeš alociran/na
                    za praksu, na mail ćeš primiti potvrdu zajedno s dokumentima
                    potrebnim za prijavu prakse i pisanje dnevnika.
                </p>
            </div>
        </div>

        <div class="step-item">
            <icon name="next-step" :size="32" color="rgb(0, 0, 0)" />
            <div class="spacer-md"></div>
            <div class="step-info">
                <h5>Potvrda o evaluaciji</h5>
                <p>
                    <b><i>Evaluacija kandidata</i></b> - red je na poslodavcu da
                    evaluira tebe kao kandidata. Ukoliko ispuniš njihova
                    očekianja trebao/la bi primiti potvrdu na email i/ili slack.
                    Ako te ne izaberu morati ćeš ponovno odabrati preferencije
                    za praksu.
                </p>
            </div>
        </div>

        <div class="step-item">
            <icon name="next-step" :size="32" color="rgb(0, 0, 0)" />
            <div class="spacer-md"></div>
            <div class="step-info">
                <h5>Prijavnica ispunjena</h5>
                <p>
                    <b><i>Prijavnica</i></b> - prijavnicu ti stiže na mail odmah
                    nakon pozitivne evaluacije. Nju ispunjavaš i predaješ
                    profesoru. Poveznicu možeš pronaći gore.
                </p>
            </div>
        </div>

        <div class="step-item">
            <icon name="next-step" :size="32" color="rgb(0, 0, 0)" />
            <div class="spacer-md"></div>
            <div class="step-info">
                <h5>Dnevnik prakse predan</h5>
                <p>
                    <b><i>Dnevnik prakse</i></b> - primjer po kojem ispunjavaš
                    dnevnik prakse ti stiže na mail zajedno s prijavnicom. Njega
                    predaješ nakon obavljene prakse na poeznicu koju isto tako
                    možeš pronaći gore ili u detaljnom progledu ovog koraka.
                </p>
            </div>
        </div>

        <div class="step-item">
            <icon name="last-step" :size="32" color="rgb(0, 0, 0)" />
            <div class="spacer-md"></div>
            <div class="step-info">
                <h5>Prijavljen ispit</h5>
                <p>
                    Još ti ostaje samo da prijaviš ispit i ako je svve bilo u
                    redu, gotovooo. Čestitke! :).
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
    name: "ProcessStepList",
    props: {
        noStepDetail: {
            type: Boolean,
            default: false,
        },
    },
    components: { Icon },
};
</script>

<style scoped>
.step-wrapper,
.step-info {
    display: flex;
    flex-direction: column;
}
.step-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 0;
}
.step-item {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 16px;
}
.step-item .icon-placeholder .step-icon {
    width: 32px;
    height: 32px;
}
.step-item.done .icon-placeholder {
    margin-right: 8px;
}
.step-item.done .icon-placeholder .step-icon {
    width: 22px;
    height: 22px;
    fill: rgb(0, 185, 0);
}
.step-item.done .step-info h5 {
    line-height: 1.5;
    margin-bottom: 8px;
}
.step-info h5 {
    line-height: 2;
}

.step-info p {
    color: rgb(118, 118, 118);
    font-size: 12px;
}
.step-info ul.step-list {
    margin-inline-start: 1rem !important;
}
ul.step-list li {
    font-size: 12px;
    color: #767676;
}

@media (max-width: 756px) {
    .step-item .spacer-md {
        display: none;
    }

    .step-item .icon-placeholder .step-icon {
        margin: 0;
    }
}
@media (min-width: 756px) {
}
</style>
