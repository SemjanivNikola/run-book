<template>
    <div class="search-bar">
        <div class="icon-placeholder">
            <icon name="search" color="#000" />
        </div>
        <div class="spacer-md"></div>
        <input type="text" placeholder="Pretraži..." />
    </div>
</template>

<script>
export default {
    name: "SearchBar",
};
</script>

<style scoped>
.search-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 16px;
}

.icon-placeholder {
    width: 24px;
    height: 24px;
}

.search-bar input {
    height: 32px;
    font-size: 18px;
    font-weight: 300;
    width: 100%;
    border: none;
    background: transparent;
    border-bottom: 1px solid transparent;
}

.search-bar input:focus {
    outline: none;
    border-bottom-color: rgb(171, 180, 194);
}

@media (max-width: 756px) {
    .search-bar {
        padding: 0 8px;
    }
}
@media (min-width: 756px) {
    .search-bar {
        padding: 0 16px;
    }
}
</style>
