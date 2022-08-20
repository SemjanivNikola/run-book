<template>
    <div id="main-container">
        <div class="info-wrapper">
            <h2>Aktivni procesi</h2>
            <div class="spacer-md"></div>
        </div>

        <div class="content">
            <search-bar />
            <process-list />
        </div>

        <right-sheet />
    </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import ProcessList from "@/views/ProcessList.vue";
import RightSheet from "@/views/RightSheet.vue";

export default {
    name: "ActiveProcessScreen",
    components: { SearchBar, ProcessList, RightSheet },
    data () {
        return {
            activeProcesses: [],
        };
    },
};
</script>
