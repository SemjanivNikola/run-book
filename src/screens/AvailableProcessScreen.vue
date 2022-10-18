<template>
    <div id="main-container">
        <div class="info-wrapper">
            <div>
                <h2>Dostupni procesi</h2>
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
            param="available"
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
import ProcessList from "@/views/available-process/ProcessList.vue";
import RightSheet from "@/views/RightSheet.vue";
import ContentLoader from "@/components/ContentLoader.vue";

export default {
    name: "AvailableProcessScreen",
    components: { SearchBar, ProcessList, RightSheet, ContentLoader },
    data () {
        return {
            queryList: null,
            isListEmpty: false,
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
