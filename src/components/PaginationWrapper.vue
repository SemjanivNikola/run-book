<template>
    <div class="pagination-wrapper">
        <select v-model="selected">
            <option v-for="o in options" :key="o.value">{{ o.value }}</option>
        </select>
        <div class="button-group">
            <button><icon name="first-page" /></button>
            <button v-for="p in pages" :key="p" :class="[{active: isActive(p)}, 'page-btn']">{{ p }}</button>
            <button><icon name="last-page" /></button>
        </div>
    </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
    components: { Icon },
    name: "PaginationWrapper",
    data () {
        return {
            selected: 15,
            options: [
                { value: 10 },
                { value: 15 },
                { value: 20 },
                { value: 25 },
            ],
            currentPage: 1,
        };
    },
    methods: {
        isActive (page) {
            return page === this.currentPage;
        },
    },
    computed: {
        pages () {
            if (this.currentPage > 1) {
                return [
                    this.currentPage - 1,
                    this.currentPage,
                    this.currentPage + 1,
                ];
            }
            return [
                this.currentPage,
                this.currentPage + 1,
                this.currentPage + 2,
            ];
        },
    },
};
</script>

<style scoped>
.pagination-wrapper {
    position: absolute;
    bottom: 24px;
    right: 0;
    display: flex;
    align-items: center;
}
.pagination-wrapper select {
    width: 50px;
    margin-right: 16px;
    padding: 8px;
    outline: none;
    border: none;
    background: transparent;
    border-bottom: 2px solid #0b1b1e;
    color: #0b1b1e;
    cursor: pointer
}
.button-group {
    background-color: #0b1b1e;
    border-radius: 8px;
    display: flex;
    align-items: stretch;
    overflow: hidden;
}
.button-group button {
    padding: 8px;
    background: transparent;
    outline: none;
    border: none;
    border-left: 1px solid rgb(229, 229, 229);
    color: #fff;
    transition: background-color 350ms ease-out;
    cursor: pointer;
}
.button-group button:first-child {
    border-left: none;
}
.button-group .page-btn {
    padding: 8px 16px;
}
.page-btn.active {
    background-color: rgba(0, 212, 255, .24);
    pointer-events: none;
}
.button-group button:hover {
    background-color: rgba(0, 212, 255, .54);
}
</style>
