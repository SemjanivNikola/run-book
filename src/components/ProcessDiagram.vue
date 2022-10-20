<template>
    <div class="diagram-wrapper">
        <div class="diagram-container">
            <div
                v-for="(group, index) in stepList"
                :key="index"
                class="diagram-col"
            >
                <process-diagram-item
                    v-for="step in group"
                    :key="step.id"
                    :step="step"
                    :index="index"
                    :shouldCount="group.length > 1"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ProcessDiagramItem from "./ProcessDiagramItem.vue";

export default {
    components: { ProcessDiagramItem },
    name: "ProcessDiagram",
    props: {
        stepList: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped src="./diagramStyle.css">
</style>
