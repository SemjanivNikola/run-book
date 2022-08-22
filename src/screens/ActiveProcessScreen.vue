<template>
    <div id="main-container">
        <div class="info-wrapper">
            <h2>Aktivni procesi</h2>
            <div class="spacer-md"></div>
        </div>

        <div class="content">
            <search-bar />
            <process-list @onOpenSheet="handleOnOpenSheet" />
        </div>

        <right-sheet
            v-if="isSheetOpen"
            @close="isSheetOpen = false"
            :itemId="itemId"
        />
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
            isSheetOpen: false,
            itemId: null,
        };
    },
    methods: {
        handleOnOpenSheet (id) {
            this.isSheetOpen = true;
            this.itemId = id;
        },
    },
};
</script>
