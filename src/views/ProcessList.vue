<template>
    <div class="table-scroll">
        <table class="list-table">
            <thead>
                <tr>
                    <th class="header-icon-placeholder"></th>
                    <th class="show-sm">Naziv<br /><small>Voditelj</small></th>
                    <th class="show-lg">Naziv</th>
                    <th class="show-lg">Voditelj</th>
                    <th class="align-center show-lg">Odrađeno</th>
                    <th class="w-150 show-lg">Pokrenuto</th>
                    <th class="w-100">Ažurirano</th>
                    <th class="header-icon-placeholder"></th>
                </tr>
            </thead>
            <tbody>
                <process-list-item v-for="item in list" :key="item.id" :process="item" />
            </tbody>
        </table>
    </div>
</template>

<script>
import ProcessListItem from "./ProcessListItem.vue";

export default {
    name: "ProcessList",
    props: {
        list: {
            type: Array,
            required: true,
        },
    },
    components: { ProcessListItem },
};
</script>

<style scoped src="@/styles/ProcessList.css">
</style>
