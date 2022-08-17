<template>
    <div class="table-scroll">
                <table class="list-table">
                    <thead>
                        <tr>
                            <th class="header-icon-placeholder"></th>
                            <th class="show-sm">
                                Naziv<br /><small>Voditelj</small>
                            </th>
                            <th class="show-lg">Naziv</th>
                            <th class="show-lg">Voditelj</th>
                            <th class="align-center show-lg">Odrađeno</th>
                            <th class="w-150 show-lg">Pokrenuto</th>
                            <th class="w-100">Ažurirano</th>
                            <th class="header-icon-placeholder"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <process-list-item />
                    </tbody>
                </table>
            </div>
</template>

<script>
import ProcessListItem from "./ProcessListItem.vue";

export default {
    name: "ProcessList",
    components: { ProcessListItem },
};
</script>

<style scoped>
.table-scroll {
    width: 100%;
    padding-bottom: 16px;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
}

.list-table {
    width: 100%;
    text-align: left;
    border-spacing: 0;
}

.list-table thead tr {
    position: sticky;
    top: 0;
    background-color: #f2f2f2;
    padding: 0 16px;
}

.list-table thead tr th {
    font-size: 14px;
    padding: 8px 0;
    z-index: 100;
}
</style>
