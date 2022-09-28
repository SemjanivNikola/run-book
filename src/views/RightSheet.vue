<template>
    <section class="sheet-wrapper">
        <div class="sheet-header">
            <div class="sheet-header-wrapper">
                <div class="sheet-header-info">
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
        <content-loader @is-fetched="fetched" path="activeProcess/readProcessById" :param="recordId" />
        <div v-if="additionalInfo" class="sheet-body">
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
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import TabBar from "@/components/TabBar.vue";
import TabBarItem from "@/components/TabBarItem.vue";
import ProcessLinkList from "@/components/ProcessLinkList.vue";
import ProcessStepList from "@/components/ProcessStepList.vue";
import ProcessDescription from "@/components/ProcessDescription.vue";
import ContentLoader from "@/components/ContentLoader.vue";

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
        ContentLoader,
    },
    data () {
        return {
            additionalInfo: null,
        };
    },
    methods: {
        fetched (content) {
            if (content) {
                this.additionalInfo = content;
            } else {
                this.$store.commit("activeProcess/setPreview", null);
            }
        },
    },
    computed: {
        ...mapGetters({ record: "activeProcess/getPreview" }),
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
    height: 100vh;
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
        width: 100%
    }
}
@media (min-width: 756px) {
    .sheet-wrapper {
        width: 38%
    }
}
</style>
