<template>
    <div id="main-container">
        <div class="info-wrapper">
            <h2>Aktivni procesi</h2>
            <div class="spacer-md"></div>
        </div>

        <content-loader
            @is-fetched="fetched"
            path="activeProcess/readProcessList"
        />
        <div v-if="queryList" class="content">
            <search-bar />
            <process-list :list="queryList" @onOpenSheet="handleOnOpenSheet" />
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
import ContentLoader from "@/components/ContentLoader.vue";

export default {
    name: "ActiveProcessScreen",
    components: { SearchBar, ProcessList, RightSheet, ContentLoader },
    data () {
        return {
            queryList: null,
            isSheetOpen: false,
            recordId: null,
        };
    },
    methods: {
        fetched (content) {
            if (content) {
                this.queryList = content;
            }
        },
        handleOnOpenSheet (id) {
            this.isSheetOpen = true;
            this.recordId = id;
        },
    },
};
</script>
