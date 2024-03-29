<template>
    <section class="sheet-wrapper">
        <div class="sheet-header">
            <div class="sheet-header-wrapper">
                <div class="sheet-header-info">
                    <h3>{{ preview.title }}</h3>
                    <h5>{{ preview.manager }}</h5>
                </div>
                <button @click="$emit('close')" style="cursor: pointer">
                    <icon name="close" color="#000" />
                </button>
            </div>
            <span class="progress-bar-wrapper">
                <span
                    class="progress-bar"
                    :style="{ width: preview.progress + '%' }"
                ></span>
            </span>
        </div>
        <content-loader
            @is-fetched="fetched"
            path="processStore/readProcessById"
            :param="recordId"
        />
        <div v-if="additionalInfo" class="sheet-body">
            <tab-bar noPlaceholder>
                <tab-bar-item title="pregled">
                    <process-description noPadding title="Ukratko" />
                </tab-bar-item>
                <tab-bar-item title="koraci">
                    <process-step-list
                        :isProcessActive="isActive"
                        :stepList="additionalInfo.stepList"
                    />
                </tab-bar-item>
            </tab-bar>
        </div>
    </section>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
import TabBarItem from "@/components/TabBarItem.vue";
import ProcessStepList from "@/components/ProcessStepList.vue";
import ProcessDescription from "@/components/ProcessDescription.vue";
import ContentLoader from "@/components/ContentLoader.vue";
import Icon from "@/components/Icon.vue";

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
        ProcessStepList,
        ProcessDescription,
        ContentLoader,
        Icon,
    },
    data () {
        return {
            preview: { title: "-", manager: "-", progress: 0 },
            additionalInfo: null,
        };
    },
    watch: {
        recordId (val) {
            this.record(val);
        },
    },
    created () {
        this.record(this.recordId);
    },
    methods: {
        fetched (content) {
            if (content) {
                this.additionalInfo = content;
            }
        },
        record (id) {
            const previewFn = this.$store.getters["processStore/getPreview"];
            const preview = previewFn(id);
            if (preview) {
                this.preview = preview;
            }
        },
    },
    computed: {
        isActive () {
            return this.additionalInfo.info.status === "ACTIVE";
        },
    },
};
</script>

<style scoped>
.sheet-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-left: 2px solid #eee;
    z-index: 99;
    overflow: hidden;
}
.sheet-header {
    border-bottom: 1px solid #e0e0e0;
    background-color: inherit;
    z-index: 100;
}
.sheet-body {
    flex: 6;
    overflow-y: scroll;
}
.sheet-header-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.sheet-header-info {
    border-bottom: none !important;
}
.sheet-header-info h3 {
    margin-bottom: 8px;
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
    .sheet-wrapper {
        width: 100%;
        height: calc(100vh - 60px);
    }
}
@media (min-width: 756px) {
    .sheet-wrapper {
        width: 38%;
        height: 100vh;
    }
}
</style>
