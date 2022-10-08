<template>
    <tr class="list-item start" @click="routeToScreen">
        <td><span class="table-icon-placeholder"></span></td>
        <td class="show-sm">
            {{ process.title }}<br /><small>{{ process.manager }}</small>
        </td>
        <td class="mix-blend show-lg">
            <span>{{ process.title }}</span>
        </td>
        <td class="w-200 show-lg">{{ process.manager }}</td>
        <td class="w-150 align-center show-lg">
            {{ process.averageDuration }}
        </td>
        <td class="w-100 align-center show-lg">{{ process.totalSteps }}</td>
        <td class="align-center show-sm">
            {{ process.averageDuration }}<br /><small>{{
                process.totalSteps
            }}</small>
        </td>
        <td class="table-action" @click.stop="onClick">
            <span class="table-icon-placeholder">
                <icon name="info" color="#000" />
            </span>
        </td>
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
                params: { id: this.process.id },
            });
        },
    },
};
</script>

<style scoped src="@/styles/ProcessList.css">
</style>
