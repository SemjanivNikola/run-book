<template>
    <div class="step-wrapper">
        <div
            :class="[{ done: isDone(index), active: isActive(index) }, 'step-item']"
            v-for="(group, index) in stepList"
            :key="index"
        >
            <icon
                :name="getIcon(index)"
                :size="getIconSize(index)"
                :color="getIconColor(index)"
            />
            <div class="step-info-wrapper">
                <div
                    v-for="step in group"
                    :key="step.id"
                    :class="[
                        {
                            done: step.status === 'COMPLETED',
                            active: step.status === 'ACTIVE',
                        },
                        'step-info',
                    ]"
                >
                    <h5>{{ step.caption }}</h5>
                    <p>{{ step.summary }}</p>
                </div>
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
        stepList: {
            type: Array,
            required: false,
        },
    },
    components: { Icon },
    data () {
        return {
            groupStatus: [],
        };
    },
    created () {
        this.prepare();
    },
    methods: {
        prepare () {
            this.groupStatus.length = this.stepList.length;
            for (let i = 0; i < this.stepList.length; i++) {
                const group = this.stepList[i];

                for (let x = 0; x < group.length; x++) {
                    this.groupStatus[i] = group[x].status;
                    if (
                        group[x].status === "COMPLETED" ||
                        group[x].status === "ACTIVE"
                    ) {
                        break;
                    }
                }

                if (this.groupStatus[i] === "ACTIVE") {
                    break;
                }
            }
        },
        isDone (index) {
            return this.groupStatus[index] === "COMPLETED";
        },
        isActive (index) {
            return this.groupStatus[index] === "ACTIVE";
        },
        getIcon (index) {
            let icon = "next-step";

            if (this.groupStatus[index] === "COMPLETED") {
                icon = "step-done";
            } else if (index === this.groupStatus.length - 1) {
                icon = "last-step";
            }

            return icon;
        },
        getIconSize (index) {
            return this.groupStatus[index] === "COMPLETED" ? 22 : 32;
        },
        getIconColor (index) {
            let color = "rgb(0, 0, 0)";

            if (this.groupStatus[index] === "COMPLETED") {
                color = "rgb(0, 185, 0)";
            } else if (this.groupStatus[index] === "ACTIVE") {
                color = "rgb(0, 212, 255)";
            }

            return color;
        },
    },
};
</script>

<style scoped>
.step-wrapper,
.step-info-wrapper,
.step-info {
    display: flex;
    flex-direction: column;
}
.step-item {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.step-item {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 8px;
}
.step-item.done .icon-wrapper {
    margin-right: 8px;
}

/* When group is done/active - color completed step */
.step-item.done .step-info-wrapper .step-info.done h5,
.step-item.active .step-info-wrapper .step-info.active h5 {
    color: #000;
}
.step-item.done .step-info-wrapper .step-info.done p,
.step-item.active .step-info-wrapper .step-info.active p {
    color: rgba(0, 0, 0, .63);
}
/* When group is done/active - color skipped steps */
.step-item.done .step-info-wrapper .step-info h5,
.step-item.active .step-info-wrapper .step-info h5,
.step-item.done .step-info-wrapper .step-info p,
.step-item.active .step-info-wrapper .step-info p {
    color: rgba(118, 118, 118, .54)
}

.step-info {
    margin-bottom: 16px;
    padding-left: 8px;
    border-left-width: 8px;
    border-left-style: solid;
    border-left-color: transparent;
}
.step-info:last-child:before {
    content: "";
    position: absolute;
    bottom: 8px;
    left: 48px;
    width: calc(100% - 48px);
    height: 1px;
    background-color: rgba(0, 0, 0, .23);
}
.step-info.done {
    border-left-color: rgb(0, 185, 0);
}
.step-info.active {
    border-left-color: rgba(0, 212, 255, 0.658);
}
.step-info h5 {
    color: rgb(0, 0, 0);
    margin-bottom: 8px;
}

.step-info p {
     color: rgba(0, 0, 0, .63);
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
}
@media (min-width: 756px) {
    .step-wrapper {
        padding: 16px 0;
    }
}
</style>
