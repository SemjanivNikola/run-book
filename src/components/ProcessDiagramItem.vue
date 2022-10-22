<template>
    <div
        :class="[{ current: isActive, done: isDone }, 'diagram-col-item']"
        title="Pregledaj"
        translate="yes"
        @click="openDetals"
    >
        <div :id="'step-' + orderNum" class="diagram-item-wrapper">
            <div class="diagram-item-content">
                <small v-if="isActive">Trenutni korak</small>
                <h4>{{ orderNum }}. {{ step.title }}</h4>

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
                    v-if="isDone"
                    type="button"
                    class="diagram-item-fab disabled"
                >
                    <div class="fab-wrapper" @click="onAction">
                        <div class="action-icon">
                            <icon
                                name="check"
                                color="rgb(191, 240, 95)"
                                :size="28"
                            />
                        </div>
                    </div>
                </button>
                <button
                    v-if="!isDone && isActionNeeded"
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

        <!-- DETAILS -->
        <div v-if="isDetailActive" class="detail-wrapper">
            <div class="detail-content">
                <h4>{{ orderNum }}. {{ step.title }}</h4>

                <div class="spacer-md"></div>

                <p style="font-size">{{ step.description }}</p>

                <div class="spacer-md"></div>

                <div class="step-info">
                    <h5 v-if="step.action">{{ step.caption }}</h5>
                    <ul v-if="index === 0" class="step-list">
                        <li>Zadatak 41 - Valamar d.d.</li>
                        <li>Zadatak 83 - Tri plus grupa d.o.o.</li>
                        <li>Zadatak 86 - TRI M d.o.o.</li>
                    </ul>
                    <ul v-if="index > 0 && step.action" class="step-list">
                        <li v-if="typeof step.action === 'string'">
                            {{ step.action }}
                        </li>
                        <li v-else>Još ništa nije ispunjeno</li>
                    </ul>
                </div>

                <button
                    v-if="isActionNeeded"
                    type="button"
                    :title="step.action.title"
                    translate="yes"
                    class="diagram-item-fab"
                >
                    <div class="fab-wrapper" @click="onAction">
                        <span>UREDI</span>
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
            orderNum: null,
            isDone: false,
            isActive: false,
            isActionNeeded: false,
            isDetailActive: false,
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
        this.init();
        this.orderNum = this.shouldCount
            ? this.index + 1 + this.subArray[this.step.id - 1].toString()
            : this.index + 1;
    },
    methods: {
        init () {
            this.isDone = this.step.status === "COMPLETED";
            if (this.isDone) {
                this.isActive = false;
                this.isActionNeeded = false;
            } else {
                this.isActive = this.step.status === "ACTIVE";
                this.isActionNeeded = Boolean(
                    this.isActive && this.step.action !== null,
                );
            }
        },
        openDetals () {
            this.isDetailActive = true;

            const handleEvent = (event) => {
                const values = Object.values(event.path);
                const i = values.findIndex(
                    (item) => item.id === `step-${this.orderNum}`,
                );

                if (i < 0) {
                    this.isDetailActive = false;
                    window.removeEventListener("click", handleEvent);
                }
            };

            window.addEventListener("click", handleEvent);
        },

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
                this.$router.push({
                    name: "FormScreen",
                    prams: { id: action },
                });
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
