<template>
    <div class="diagram-wrapper">
        <div class="diagram-container">
            <div
                v-for="(group, index) in stepList"
                :key="index"
                class="diagram-col"
            >
                <div
                    v-for="(step, innerIndex) in group"
                    :key="step.id"
                    :class="[{ current: step.isActive }, 'diagram-col-item']"
                    title="Pregledaj"
                    translate="yes"
                >
                    <div class="diagram-item-wrapper">
                        <div class="diagram-item-content">
                            <small v-if="isActive">Trenutni korak</small>
                            <h4>
                                {{ index + 1 }}.<span class="index-addon" v-if="group.length > 1">{{
                                    subArray[innerIndex]
                                }}</span>
                                {{ step.title }}
                            </h4>
                            <div v-if="isActionNeeded" class="item-status">
                                <icon name="warning" color="#e81e63" />
                                <span>Potrebna akcija</span>
                            </div>

                            <!-- FAB WITH DESCRIPTION-->
                            <button
                                v-if="!isActionNeeded"
                                type="button"
                                :title="action.title"
                                translate="yes"
                                class="diagram-item-fab"
                            >
                                <div
                                    class="fab-wrapper"
                                    @click="$emit('on-action')"
                                >
                                    <span>{{ action.caption }}</span>
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
            </div>
        </div>
    </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
    components: { Icon },
    name: "ProcessDiagram",
    props: {
        stepList: {
            type: Array,
            required: true,
        },
    },
    data () {
        return {
            isActive: false,
            isActionNeeded: false,
            action: {
                title: "Odaberi preferencije",
                caption: "Preferencije",
            },
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
};
</script>

<style scoped src="./diagramStyle.css">
</style>
