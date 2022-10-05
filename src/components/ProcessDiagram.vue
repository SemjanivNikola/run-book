<template>
    <div class="diagram-wrapper">
        <!-- STEP DESCRIPTION -->
        <div class="step-description-wrapper">
            <ul>
                <li><i>Odaberi korak za prikaz pojedinosti o njemu.</i></li>
            </ul>
        </div>
        <div class="spacer-md"></div>

        <div class="diagram-container">
            <div
                v-for="(group, index) in stepList"
                :key="index"
                class="diagram-col"
            >
                <div
                    v-for="step in group"
                    :key="step.id"
                    :class="[{ current: step.isActive }, 'diagram-col-item']"
                    title="Pregledaj"
                    translate="yes"
                >
                    <div class="diagram-item-wrapper">
                        <div class="diagram-item-content">
                            <small v-if="isActive">Trenutni korak</small>
                            <h4>{{index + step.id}} {{step.title}}</h4>
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
                                <div class="fab-wrapper" @click="$emit('onAction')">
                                    <span>{{action.caption}}</span>
                                    <div class="action-icon">
                                         <icon name="plus" color="rgb(0,212,255)" :size="28" />
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
        };
    },
};
</script>

<style scoped src="./diagramStyle.css">
</style>
