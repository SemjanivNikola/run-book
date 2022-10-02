<template>
    <div class="materials-wrapper">
        <h4>Poveznice</h4>
        <div class="spacer-sm"></div>
        <ul>
            <li v-for="(item, index) in urlList" :key="index">
                <a :href="item.url" targert="_blank"> {{ item.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ProcessLinkList",
    props: {
        urlList: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.materials-wrapper ul {
    margin-inline-start: 16px;
}
.materials-wrapper ul li a {
    color: #005d82;
    font-style: italic;
    line-height: 1.5;
}
@media (max-width: 756px) {
    .materials-wrapper ul {
        padding: 0;
    }
}
@media (min-width: 756px) {
    .materials-wrapper {
        padding: 16px 16px 16px 8px;
    }
}
</style>
