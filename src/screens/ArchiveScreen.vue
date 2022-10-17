<template>
    <div id="main-container">
        <div class="info-wrapper">
            <div>
                <h2>Arhiva</h2>
                <div class="spacer-md"></div>
            </div>

            <img
                src="../assets/logo.png"
                alt="logo"
                style="width: 50px; height: 100%"
            />
        </div>

        <div class="content">
            <search-bar />
            <process-list @onOpenSheet="handleOnOpenSheet" />
        </div>

        <div v-if="isListEmpty" class="empty-list-wrapper">
            <img src="../assets/empty-list.svg" alt="List is empty" />
            <p><b>Ops!</b> Nažalost nismo uspjeli ništa pronaći.</p>
        </div>

        <right-sheet
            v-if="isSheetOpen"
            @close="isSheetOpen = false"
            :recordId="recordId"
        />
    </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import ProcessList from "@/views/ProcessList.vue";
import RightSheet from "@/views/RightSheet.vue";

export default {
    name: "ArchiveScreen",
    components: { SearchBar, ProcessList, RightSheet },
    data () {
        return {
            activeProcesses: [],
            isListEmpty: true,
            isSheetOpen: false,
            recordId: null,
        };
    },
    methods: {
        handleOnOpenSheet (id) {
            this.isSheetOpen = true;
            this.recordId = id;
        },
    },
};
</script>

<style scoped>
#main-container .info-wrapper {
    display: flex;
    justify-content: space-between;
}
</style>
