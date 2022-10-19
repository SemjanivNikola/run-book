<template>
    <tr class="list-item" @click="routeToScreen" title="Pogledaj">
        <td>
            <span class="table-icon-placeholder">
                <icon :name="getIconName" :color="getColor" />
            </span>
        </td>
        <td class="show-sm">
            {{ process.title }}<br /><small>{{ process.manager }}</small>
        </td>
        <td class="show-lg">{{ process.title }}</td>
        <td class="w-250 show-lg">{{ process.manager }}</td>
        <td class="align-center show-lg">{{ process.progress }}%</td>
        <td class="w-150 show-lg">{{process.startedAt}}</td>
        <td class="w-100">{{process.updatedAt}}</td>
        <td class="table-action" @click.stop="onClick">
            <span class="table-icon-placeholder">
                <icon name="info" color="#000" />
            </span>
        </td>
        <span class="show-sm progress-bar-row">
            <span class="progress-bar" :style="{ width: process.progress + '%' }"></span>
        </span>
    </tr>
</template>

<script>
export default {
    name: "ProcessListItem",
    props: {
        process: {
            type: Object,
            required: true,
        },
    },
    methods: {
        onClick (event) {
            event.preventDefault();
            this.$parent.$emit("onOpenSheet", this.process.id);
        },
        routeToScreen () {
            this.$router.push({
                name: "ProcessDetailScreen",
                params: { id: this.process.id, title: this.process.title },
            });
        },
    },
    computed: {
        getIconName () {
            return this.process.progress >= 100 ? "process-done" : "process-fail";
        },
        getColor () {
            return this.process.progress >= 100 ? "rgb(0, 152, 0)" : "rgb(255, 0, 0)";
        },
    },
};
</script>

<style scoped src="@/styles/ProcessList.css">
</style>
