<template>
    <tr class="list-item" style="position: relative" @click="routeToScreen">
        <td>
            <span class="table-icon-placeholder">
                <icon name="progress-clock" color="#000" />
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
        <td @click.stop="onClick">
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
                params: { id: this.process.id },
            });
        },
    },
};
</script>

<style scoped>
tr.list-item {
    cursor: pointer;
    transition: background-color 400ms ease-out;
    border-bottom: 1px solid #eee;
}
tr.list-item:hover {
    background-color: #ffffff;
}
tr.list-item td {
    padding: 16px 0;
}
.table-icon-placeholder {
    display: block;
    width: 24px;
    height: 24px;
}
.progress-bar-row {
    position: absolute;
    width: 100%;
    bottom: -1px;
    left: 0;
    padding: 0;
    background: transparent;
}
.progress-bar-row .progress-bar {
    height: 4px;
    border-radius: 0 16px 16px 0;
    background-image: linear-gradient(
        145deg,
        rgba(0, 255, 255, 1) 0%,
        rgba(204, 255, 102, 1) 100%
    );
}
.progress-bar-row .progress-bar.error {
    background-image: linear-gradient(
        145deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 204, 0, 1) 100%
    );
}
tr td.align-center {
    text-align: center;
}
tr td.w-100 {
    width: 100px;
}
tr td.w-150 {
    width: 150px;
}
tr td.w-200 {
    width: 200px;
}
tr td.w-250 {
    width: 250px;
}

@media (max-width: 756px) {
    .list-table tbody tr td.show-lg {
        display: none;
    }
    .list-table tbody tr td:first-child {
        width: 46px;
        padding-left: 8px;
    }
    .list-table tbody tr td:last-child {
        width: 32px;
    }
    .progress-bar-row.show-sm {
        display: block;
    }
}

@media (min-width: 756px) {
    .list-table tbody tr.show-sm,
    .list-table tbody tr td.show-sm {
        display: none;
    }
    .list-table tbody tr td:first-child {
        width: 56px;
        padding-left: 16px;
    }
    .list-table tbody tr td:last-child {
        width: 40px;
    }
    .progress-bar-row.show-sm {
        display: none;
    }
}
</style>
