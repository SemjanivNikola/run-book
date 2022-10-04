<template>
    <tr class="list-item" style="position: relative" @click="routeToScreen">
        <td><span class="table-icon-placeholder"></span></td>
        <td class="color show-sm">
            {{ process.title }}<br /><small>{{ process.manager }}</small>
        </td>
        <td class="color show-lg">{{ process.title }}</td>
        <td class="w-250 show-lg">{{ process.manager }}</td>
        <td class="w-150 align-center show-lg">
            {{ process.averageDuration }}
        </td>
        <td class="w-100 align-center show-lg">{{ process.totalSteps }}</td>
        <td @click.stop="onClick">
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

<style scoped>
tr.list-item {
    position: relative;
    cursor: pointer;
    transition: background-color 400ms ease-out;
    border-bottom: 1px solid #eee;
    background: transparent;
    overflow: hidden;
    z-index: 10;
}
tr.list-item td {
    padding: 16px 0;
}
tr.list-item td.color {
    color: #000;
}
tr.list-item td.color:after {
    content: "Pokreni ➔";
    margin-left: 24px;
    padding: 8px;
    border-radius: 16px;
    color: #f9f9f9;
    mix-blend-mode: difference;
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

/* Table row - CALL TO ACTION: hover */
tr.list-item td.color:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #fff;
    z-index: -2;
}
tr.list-item:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 12%;
    height: 100%;
    background-color: #000;
    transform: translateX(-110%);
    z-index: -1;
}
tr.list-item:hover:after {
    animation: slider 450ms ease-out forwards;
}
tr.list-item:hover td.color:before {
    animation: slider-line 150ms ease-out 150ms forwards;
}

@keyframes slider {
    0% {
        transform: skew(-18deg) translateX(-110%);
    }
    50% {
        width: 100%;
        transform: skew(-18deg) translateX(0);
    }
    100% {
        width: 50%;
        transform: skew(-18deg) translateX(202%);
    }
}
@keyframes slider-line {
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
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
