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
    border-collapse: collapse;
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
.table-icon-placeholder {
    display: block;
    width: 24px;
    height: 24px;
}
tr th.align-center {
    text-align: center;
}
tr th.w-100 {
    width: 100px;
}
tr th.w-150 {
    width: 150px;
}
tr th.w-200 {
    width: 200px;
}
tr th.w-250 {
    width: 250px;
}

@media (max-width: 756px) {
    .list-table thead tr th.show-lg {
        display: none;
    }
    .table-scroll {
        height: calc(100vh - 124px);
    }
}

@media (min-width: 756px) {
    .list-table tbody tr td {
        border-bottom: 1px solid #eee;
    }
    .list-table thead tr.show-sm,
    .list-table thead tr th.show-sm {
        display: none;
    }
    .table-scroll {
        height: calc(100vh - 157px);
    }
}
</style>
