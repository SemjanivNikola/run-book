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

        <content-loader
            @is-fetched="fetched"
            path="processStore/readProcessList"
            param="archive"
        />
        <div v-if="queryList" class="content">
            <search-bar />
            <process-list :list="queryList" @onOpenSheet="handleOnOpenSheet" />
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
import ProcessList from "@/views/archive-process/ProcessList.vue";
import RightSheet from "@/views/RightSheet.vue";
import ContentLoader from "@/components/ContentLoader.vue";

export default {
    name: "ArchiveScreen",
    components: { SearchBar, ProcessList, ContentLoader, RightSheet },
    data () {
        return {
            queryList: [],
            isListEmpty: true,
            isSheetOpen: false,
            recordId: null,
        };
    },
    methods: {
        fetched (content) {
            if (content) {
                if (content.length > 0) {
                    this.queryList = content;
                } else {
                    this.isListEmpty = true;
                }
            }
        },
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
