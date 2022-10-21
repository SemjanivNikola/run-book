<template>
    <div
        :class="[{ current: isActive }, 'diagram-col-item']"
        title="Pregledaj"
        translate="yes"
    >
        <div class="diagram-item-wrapper">
            <div class="diagram-item-content">
                <small v-if="isActive">Trenutni korak</small>
                <h4>
                    {{ index + 1 }}.<span
                        class="index-addon"
                        v-if="shouldCount"
                        >{{ subArray[step.id - 1] }}</span
                    >
                    {{ step.title }}
                </h4>

                <div v-if="isActionNeeded" class="action item-status">
                    <icon name="warning" color="#e81e63" />
                    <span>Potrebna akcija</span>
                </div>
                <!-- Hide on INACTIVE step -->
                <div v-if="isActive && !isActionNeeded" class="item-status">
                    <icon name="progress-clock" color="rgb(171, 180, 194)" />
                    <span>Čekanje se odgovor treće strane</span>
                </div>

                <!-- FAB WITH DESCRIPTION-->
                <button
                    v-if="isActionNeeded"
                    type="button"
                    :title="step.action.title"
                    translate="yes"
                    class="diagram-item-fab"
                >
                    <div class="fab-wrapper" @click="onAction">
                        <span>{{ step.action.label }}</span>
                        <div class="action-icon">
                            <icon
                                name="plus"
                                color="rgb(0,212,255)"
                                :size="28"
                            />
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from "./Icon.vue";

export default {
    components: { Icon },
    name: "ProcessDiagramItem",
    props: {
        step: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        shouldCount: {
            type: Boolean,
            required: true,
        },
    },
    data () {
        return {
            isActive: false,
            isActionNeeded: false,
            subArray: [
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
            ],
        };
    },
    created () {
        this.isActive = this.step.status === "ACTIVE";
        this.isActionNeeded = Boolean(
            this.isActive && this.step.action !== null,
        );
    },
    methods: {

        /**
         * @desc If action is string it means it's URL for rthird party,
         * otherwise it sohould be ID/number so we route to form screen
         */
        onAction () {
            const { action } = this.step;

            if (typeof action === "string") {
                // URL - redirect to third party
                window.open(action, "_blank");
            } else {
                // Number - read for by ID
                this.$router.push({ name: "FormScreen", prams: { id: action } });
            }
        },
    },
    computed: {
        iconName () {
            return this.isActionNeeded ? "" : "";
        },
        iconColor () {
            return this.isActionNeeded ? "" : "";
        },
        iconTitle () {
            return this.isActionNeeded ? "" : "";
        },
    },
};
</script>

<style scoped src="./diagramStyle.css">
</style>
