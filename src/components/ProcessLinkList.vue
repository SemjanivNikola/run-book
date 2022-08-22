<template>
    <ul class="materials-wrapper">
        <li>
            <a href="https://www.google.com" targert="_blank">
                Pogledaj zanimljive i slobodne projekte ovdje</a
            >
        </li>
        <!-- bit.ly/fipu-praksa-zadaci -->
        <li>
            <a href="https://www.google.com" targert="_blank"
                >Prijavi se na 3 najdraža zadatka</a
            >
        </li>
        <!-- bit.ly/fipu-praksa-pref -->
        <li>
            <a href="https://www.google.com" targert="_blank"
                >Prijavnica za poduzeća</a
            >
        </li>
        <!-- http://bit.ly/fipu-praksa-prijava-zadatka -->
        <li>
            <a href="https://www.google.com" targert="_blank"
                >Predaja prijavnice</a
            >
        </li>
        <li>
            <a href="https://www.google.com" targert="_blank"
                >Predaja dnevnika prakse</a
            >
        </li>
        <li>
            <a href="https://www.google.com" targert="_blank"
                >Studomat - za prijavu ispita</a
            >
        </li>
    </ul>
</template>

<script>
export default {
    name: "ProcessLinkList",
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
