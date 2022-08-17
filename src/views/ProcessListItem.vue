<template>
    <tr>
        <td :colspan="isSmall ? 4 : 7">
            <table>
                <tr onclick="window.location=`process-detail.html`;">
                    <td>
                        <span class="table-icon-placeholder">
                            <icon
                                name="progress-clock"
                                size="24"
                                color="#000"
                            />
                        </span>
                    </td>
                    <td class="show-sm">
                        Proces prijave prakse<br /><small
                            >Nikola Tanković</small
                        >
                    </td>
                    <td class="show-lg">Proces prijave prakse</td>
                    <td class="w-250 show-lg">Nikola Tanković</td>
                    <td class="align-center show-lg">22%</td>
                    <td class="w-150 show-lg">12.02.2022</td>
                    <td class="w-100">14.07.2022</td>
                    <td>
                        <span class="table-icon-placeholder">
                            <icon name="info" size="24" color="#000" />
                        </span>
                    </td>
                </tr>
                <tr class="show-sm progress-bar-row">
                    <td colspan="4" class="progress-bar-wrapper">
                        <span class="progress-bar" style="width: 68%"></span>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</template>

<script>
import Icon from "./Icon.vue";

export default {
    name: "ProcessListItem",
    components: { Icon },
    data () {
        return {
            isSmall: false,
        };
    },
    created () {
        this.isSmall = window.innerWidth >= 756;
    },
};
</script>

<style scoped>
tr.action-row {
    cursor: pointer;
    transition: background-color 400ms ease-out;
}

tr.has-border {
    border-bottom: 1px solid #eee;
}

tr.action-row td {
    padding: 16px 0;
}

.table-icon-placeholder {
    display: block;
    width: 24px;
    height: 24px;
}

tr.action-row:hover {
    background-color: #FFFFFF;
}
</style>
