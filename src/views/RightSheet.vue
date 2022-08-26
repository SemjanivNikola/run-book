<template>
    <section class="sheet-wrapper">
        <div class="sheet-header">
            <div class="sheet-header-wrapper">
                <div class="info-wrapper">
                    <h3>{{ record.title }}</h3>
                    <h6>{{ record.manager }}</h6>
                </div>
                <button @click="$emit('close')" style="cursor: pointer">
                    X
                </button>
            </div>
            <span class="progress-bar-wrapper">
                <span
                    class="progress-bar"
                    :style="{ width: record.progress + '%' }"
                ></span>
            </span>
        </div>
        <error-handler v-if="error" :msg="error" />
        <loader v-else :isLoading="isLoading">
            <div class="sheet-body">
                <tab-bar noPlaceholder>
                    <tab-bar-item title="pregled">
                        <process-description noPadding />
                    </tab-bar-item>
                    <tab-bar-item title="poveznice">
                        <process-link-list />
                    </tab-bar-item>
                    <tab-bar-item title="koraci">
                        <process-step-list />
                    </tab-bar-item>
                </tab-bar>
            </div>
        </loader>
    </section>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
import TabBarItem from "@/components/TabBarItem.vue";
import ProcessLinkList from "@/components/ProcessLinkList.vue";
import ProcessStepList from "@/components/ProcessStepList.vue";
import ProcessDescription from "@/components/ProcessDescription.vue";
import Loader from "@/components/Loader.vue";
import ErrorHandler from "@/components/ErrorHandler.vue";

export default {
    name: "RightSheet",
    props: {
        recordId: {
            type: Number,
            required: true,
        },
    },
    components: {
        TabBar,
        TabBarItem,
        ProcessLinkList,
        ProcessStepList,
        ProcessDescription,
        Loader,
        ErrorHandler,
    },
    data () {
        return {
            isLoading: true,
            record: { title: "-", manager: "-", progress: "0" },
            additionalInfo: null,
            error: null,
        };
    },
    created () {
        this.fetchData(this.recordId);
    },
    watch: {
        recordId (value) {
            this.fetchData(value);
        },
    },
    methods: {
        async fetchData (id) {
            this.isLoading = true;
            this.record = this.$store.getters["activeProcess/getPreview"];
            try {
                this.additionalInfo = await this.$store.dispatch(
                    "activeProcess/readProcessById",
                    id,
                );
            } catch (error) {
                this.cleanRecord();
                this.error = error;
            }
            this.isLoading = false;
        },
        cleanRecord () {
            this.record = { title: "-", manager: "-", progress: "0" };
        },
    },
};
</script>

<style scoped>
.sheet-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    width: 38%;
    height: 100vh;
    background-color: #fff;
    border-left: 2px solid #eee;
    z-index: 99;
    overflow-x: hidden;
    overflow-y: scroll;
}
.sheet-header {
    position: sticky;
    top: 0;
    border-bottom: 1px solid #e0e0e0;
    background-color: inherit;
    z-index: 100;
}
.sheet-header-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.info-wrapper {
    border-bottom: none !important;
}
button {
    background: transparent;
    outline: none;
    border: none;
    padding: 24px;
}
.progress-bar-wrapper {
    position: relative;
    bottom: -1px;
    margin: -3px 24px 0 24px;
    background-color: rgb(244, 244, 244);
    transform: skew(-30deg);
    overflow: hidden;
    box-shadow: 4px 5px 4px 2px rgb(0 0 0 / 18%);
    z-index: 10;
}
.progress-bar-wrapper .progress-bar {
    height: 12px;
    background-image: linear-gradient(
        145deg,
        rgba(0, 255, 255, 1) 0%,
        rgba(204, 255, 102, 1) 100%
    );
}
.eror-wrapper {
    width: 100%;
    height: 100%;
    padding: 32px 16px;
}

@media (max-width: 756px) {
}
@media (min-width: 756px) {
}
</style>
