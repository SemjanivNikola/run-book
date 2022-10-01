<template>
    <ul class="materials-wrapper">
        <li v-for="(item, index) in urlList" :key="index">
            <a :href="item.url" targert="_blank">
               {{item.title}}</a
            >
        </li>
    </ul>
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
ul.materials-wrapper {
    margin-inline-start: 16px;
}
ul.materials-wrapper li a {
    color: #005d82;
    font-style: italic;
    line-height: 1.5;
}
@media (max-width: 756px) {
    .materials-wrapper {
        padding: 0;
    }
}
@media (min-width: 756px) {
    .materials-wrapper {
        padding: 16px 16px 16px 8px;
    }
}
</style>
