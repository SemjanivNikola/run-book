<template>
    <div class="table-scroll">
        <table class="list-table">
            <thead>
                <tr>
                    <th class="header-icon-placeholder"></th>
                    <th class="show-sm">Naziv<br /><small>Voditelj</small></th>
                    <th class="show-lg">Naziv</th>
                    <th class="w-250 show-lg">Voditelj</th>
                    <th class="w-150 align-center show-lg">
                        Prosječno vrijeme trajanja
                    </th>
                    <th class="w-100 align-center show-lg">Broj koraka</th>
                    <th class="align-center show-sm">
                        Vrijeme trajanja<br /><small>Broj koraka</small>
                    </th>
                    <th class="header-icon-placeholder"></th>
                </tr>
            </thead>
            <tbody>
                <process-list-item
                    v-for="item in list"
                    :key="item.id"
                    :process="item"
                />
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
