<template>
    <article class="tab-bar">
        <header>
            <ul class="tab-wrapper">
                <li v-if="!noPlaceholder" class="tab-item-placeholder"></li>
                <li
                    v-for="(tab, index) in tabList"
                    class="tab-item"
                    :class="{ active: tab.isActive }"
                    :key="index"
                    @click="selectTab(index)"
                >
                    <h6 class="tab-title">{{ tab.title }}</h6>
                </li>
            </ul>
        </header>
        <section class="tab-detail">
            <slot />
        </section>
    </article>
</template>

<script>
export default {
    name: "TabBar",
    props: {
        noPlaceholder: {
            type: Boolean,
            default: false,
        },
    },
    data () {
        return {
            tabList: [],
        };
    },
    mounted () {
        this.tabList = this.$children;
        this.tabList[0].isActive = true;
    },
    methods: {
        selectTab (index) {
            this.tabList.forEach((tab, i) => {
                tab.isActive = i === index;
            });
        },
    },
};
</script>

<style scoped>
.tab-bar {
    position: relative;
    width: 100%;
}
.tab-bar header {
    position: sticky;
    top: 0;
    background-color: rgb(255, 255, 255);
    z-index: 100;
}
.tab-wrapper {
    width: 100%;
    height: 46px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    border-bottom: 1px solid #e5e5e5;
    list-style-type: none;
}
.tab-wrapper .tab-item-placeholder {
    width: 71px;
}
.tab-wrapper .tab-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    text-decoration: none;
    text-align: center;
    border-bottom: 3px solid transparent;
    cursor: pointer;
}
.tab-wrapper .tab-item h6.tab-title {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
}

.tab-wrapper .tab-item.active {
    border-bottom-color: #005d82;
    pointer-events: none;
}
.tab-wrapper .tab-item.active h6.tab-title {
    font-weight: 700;
    color: #005d82;
}

@media (max-width: 756px) {
    .tab-detail {
        padding: 16px 8px;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
    }
}
@media (max-width: 546px) {
    .tab-wrapper .tab-item-placeholder {
        display: none;
    }
}
@media (min-width: 756px) {
    .tab-detail {
        padding: 16px;
        border-radius: 4px;
        background-color: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
            rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
}
</style>
